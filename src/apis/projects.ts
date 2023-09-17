import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchProjects() {
  return (await prisma.project.findMany({
    include: { Profile: true },
  })) as Project[];
}

export async function fetchProject(key: string) {
  return await prisma.project.findFirst({
    where: {
      key,
    },
    include: {
      Profile: true,
      CardList: {
        orderBy: {
          order: "asc",
        },
        include: { Card: true },
      },
    },
  });
}
