import prisma from "@/src/utils/db";
import { Prisma, Project } from "@prisma/client";

const projectWithIssues = Prisma.validator<Prisma.ProjectDefaultArgs>()({
  include: { issues: true },
});

type ProjectWithIssues = Prisma.ProjectGetPayload<typeof projectWithIssues>;

const cache: { [key: string]: ProjectWithIssues } = {};

export async function fetchProjects() {
  return (await prisma.project.findMany({
    include: { user: true },
  })) as Project[];
}

type CreateProject = {
  name: string;
  key?: string;
  userId: string;
};

export async function createProject({ name, key, userId }: CreateProject) {
  return await prisma.project.create({
    data: {
      name,
      key: key ?? name.substring(0, 3),
      user: {
        connect: { id: userId },
      },
    },
  });
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
      user: true,
      issues: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
  if (project) {
    cache[key] = project;
  }
  return project;
}
