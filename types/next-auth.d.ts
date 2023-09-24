import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession;
  }
}
// declare module "next-auth/jwt" {
//   interface JWT extends DefaultJWT {
//     uid: string;
//   }
// }
