"use server";

export async function createIssue(form: FormData) {
  console.log("**** create issue ", form);
  // throw new Error("Error Error");
  return { form, result: "Ok" };
}
