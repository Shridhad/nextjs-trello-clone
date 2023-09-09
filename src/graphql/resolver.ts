import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const allProjects = async () => {
  const projects = await prisma.project.findMany({
    include: { creator: true },
  });
  return projects;
};

export const Query = { allProjects };
