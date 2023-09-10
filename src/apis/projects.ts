import { Card, PrismaClient, Project } from "@prisma/client";

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
    include: { Profile: true },
  });
}

export async function createIssue() {
  const issue = {};

  prisma.card.create({
    data: {
      title: "",
      description: "",
      profileId: "",
      projectId: "",
      listId: "",
    },
    include: {
      Profile: true,
    },
  });
}
