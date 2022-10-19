import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

import connectMongo from "~/libs/connectMongo";
import User from '~/models/user';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },

    async signIn({ user }) {
      try {
        await connectMongo();

        // Signup
        const doc = await User.findOne({ id: user.id });
        if (doc == null) {
          await User.create(user);
        }
      }
      catch (err) {
        console.error(err);
        return false;
      }

      return true;
    },
  }
}
export default NextAuth(authOptions)
