"use server";

import { createList } from "@/src/apis/cardList";

export async function createIssue(form: FormData) {
  console.log("**** create issue ", form);
  // throw new Error("Error Error");
  return { form, result: "Ok" };
}

export async function createNewList(title: string, projectId: string) {
  const cardList = await createList(title, projectId);
  console.log("****** cardList ", cardList);
  return { title, cardList, result: "ok" };
}
