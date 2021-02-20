import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt(token, user, account) {
      if (user) {
        const { access_token, refresh_token } = account;
        return { ...token, access_token, refresh_token };
      }
      return token;
    },
    async session(session, { access_token, refresh_token }) {
      return { ...session, access_token, refresh_token };
    },
  },
});
