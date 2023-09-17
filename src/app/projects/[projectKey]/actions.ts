"use server";

import { createCard } from "@/src/apis/cards";
import { createList } from "@/src/apis/cardLists";
import { revalidatePath } from "next/cache";

export async function createIssue(
  title: string,
  description: string,
  listId: string
) {
  const card = await createCard(title, description, listId);
  revalidatePath("projects/[projectKey]");
  return { card, result: "Ok" };
}

export async function createNewList(title: string, projectId: string) {
  const cardList = await createList(title, projectId);
  revalidatePath("projects/[projectKey]");
  return { title, cardList, result: "ok" };
}
