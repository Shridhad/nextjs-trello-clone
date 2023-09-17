import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCard(
  title: string,
  description: string,
  listId: string
) {
  console.log("creating with ", title, listId);
  if (!title || !listId) {
    throw new Error("title and listId are required.");
  }
  return await prisma.card.create({
    data: {
      title,
      description,
      list: {
        connect: { id: listId },
      },
    },
  });
}
