"use server";

import { createIssue as create } from "@/src/apis/issues";
import { revalidatePath } from "next/cache";
import { getUser } from "@/src/utils/session";

export async function createIssue(
  title: string,
  description: string,
  projectId: string
) {
  const user = await getUser();
  const card = await create(title, description, projectId, user.id);
  revalidatePath("projects/[projectKey]");
  return { card, result: "Ok" };
}
