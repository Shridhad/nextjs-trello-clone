import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();
const cache: { [key: string]: Project } = {};

export async function fetchProjects() {
  return (await prisma.project.findMany({
    include: { Profile: true },
  })) as Project[];
}

export async function fetchProject(key: string) {
  if (cache[key]) {
    return cache[key];
  }
  const project = await prisma.project.findFirst({
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
  if (project) {
    cache[key] = project;
  }
  return project;
}
