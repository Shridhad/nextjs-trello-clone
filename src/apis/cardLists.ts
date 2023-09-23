import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchLists(projectId: string) {
  return await prisma.cardList.findMany({
    where: { projectId: projectId },
    include: { Card: true },
  });
}

export async function createList(title: string, projectId: string) {
  if (!title || !projectId) {
    throw new Error("title and projectId are required.");
  }
  return await prisma.cardList.create({
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
