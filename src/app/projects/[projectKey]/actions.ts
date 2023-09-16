"use server";

import { createList } from "@/src/apis/cardLists";

export async function createIssue(
  title: string,
  description: string,
  listId: string
) {
  console.log("**** create issue ");
  // throw new Error("Error Error");
  return { result: "Ok" };
}

export async function createNewList(title: string, projectId: string) {
  const cardList = await createList(title, projectId);
  console.log("****** cardList ", cardList);
  return { title, cardList, result: "ok" };
}
