"use server";

import { createProject } from "@/src/apis/projects";
import { getUser } from "@/src/utils/session";
import { revalidatePath } from "next/cache";

export async function create(name: string, key: string) {
  const user = await getUser();
  await createProject({ name, key, userId: user.id });
  revalidatePath("projects");
}
