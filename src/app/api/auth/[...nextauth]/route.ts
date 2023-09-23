import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: "this-is-random-string-for-jwt-token",
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRETE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRETE_KEY!,
      profile(profile) {
        console.log("Google profile ", profile);
        return { ...profile, id: profile.sub };
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
