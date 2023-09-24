import { authOptions } from "@/src/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { logger } from "../logger";

export async function getUser() {
  const session = await getServerSession(authOptions);
  logger.error("Error ", session);

  if (!session) {
    throw new Error("Not Authenticated");
  }

  return session.user;
}
