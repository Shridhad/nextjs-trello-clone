import prisma from "@/src/utils/db";

export async function createIssue(
  title: string,
  description: string,
  projectId: string,
  userId: string
) {
  if (!title || !projectId) {
    throw new Error("title and projectId are required.");
  }
  return await prisma.issue.create({
    data: {
      title,
      description,
      project: {
        connect: { id: projectId },
      },
      user: {
        connect: { id: userId },
      },
    },
  });
}
