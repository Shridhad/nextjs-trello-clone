import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { logger } from "@/src/logger";

const client = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET_KEY!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // jwt({ token, user, account, profile }) {
    //   if (user) {
    //     return {
    //       name: user.name,
    //       email: user.email,
    //       picture: user.image,
    //       uid: user.id,
    //     };
    //   }
    //   return token;
    // },
    session({ session, token, user }) {
      if (session?.user) {
        session.user.id = user.id;
      }
      logger.info("Session: ", session);
      logger.info("Token: ", token);
      logger.info("User: ", user);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export const getServerAuthSession = () => {
  return getServerSession(authOptions);
};

export { handler as GET, handler as POST };
