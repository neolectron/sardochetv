import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshTwitchAccessToken(token) {
  try {
    const url =
      'https://id.twitch.tv/oauth2/token?' +
      new URLSearchParams({
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      });

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refresh_token: refreshedTokens.refresh_token ?? token.refresh_token, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export default NextAuth({
  pages: {
    error: '/admin',
  },
  providers: [
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user) {
      return process.env.ADMIN_UID_LIST?.split(',').includes(user.id);
    },
    async jwt(token, user, account) {
      if (account && user) {
        const { access_token, refresh_token, expires_in } = account;

        return {
          ...token,
          access_token,
          refresh_token,
          accessTokenExpires: Date.now() + expires_in * 1000,
        };
      }

      if (Date.now() < token.accessTokenExpires) return token;
      return refreshTwitchAccessToken(token);
    },
    async session(session, { access_token, refresh_token, error }) {
      return { ...session, access_token, refresh_token, error };
    },
  },
});
