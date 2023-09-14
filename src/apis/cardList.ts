import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchLists(projectId: string) {
  return await prisma.cardList.findMany({
    where: { projectId: projectId },
    include: { cards: true },
  });
}

export async function createList(title: string, projectId: string) {
  console.log("creating with ", title, projectId);
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
