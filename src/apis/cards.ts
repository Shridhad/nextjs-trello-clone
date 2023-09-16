import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCard(title: string, projectId: string) {
  console.log("creating with ", title, projectId);
  if (!title || !projectId) {
    throw new Error("title and projectId are required.");
  }
  return await prisma.card.create({
    data: {
      title,
      Project: {
        connect: {
          id: projectId,
        },
      },
    },
  });
}
