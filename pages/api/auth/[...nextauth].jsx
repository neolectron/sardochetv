import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

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
