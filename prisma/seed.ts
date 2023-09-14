import { PrismaClient, Profile, ProjectType, Project } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await dropTables();
  const profiles: Profile[] = await createProfiles();
  await createProjects(profiles);
}

async function dropTables() {
  await prisma.profile.deleteMany();
  await prisma.project.deleteMany();
}

async function createProfiles() {
  const profiles = getProfiles();
  return await Promise.all(
    profiles.map(async (profile) => {
      return await prisma.profile.create({
        data: profile,
      });
    })
  );
}

async function createProjects(profiles: Profile[]) {
  const projects = getProjects(profiles);
  return await Promise.all(
    projects.map(async (project) => {
      return await prisma.project.create({
        data: project,
      });
    })
  );
}

function getProfiles() {
  return [
    {
      name: "Shridhar Deshmukh",
      email: "shridhar.deshmukh3@gmail.com",
    },
    {
      name: "The Silent",
      email: "thesilenthandicap@gmail.com",
    },
  ];
}

function getProjects(profiles: Profile[]) {
  return [
    {
      name: "Trello Clone",
      description:
        "Trello clone application using Prisma, Supabase, and NextJs",
      type: ProjectType.Kanban,
      profileId: profiles[0].id,
      key: "TRC",
    },
    {
      name: "Learn Daisy UI",
      description: "Build UI components using daisy UI",
      type: ProjectType.TodoList,
      profileId: profiles[1].id,
      key: "DAI",
    },
  ] as Project[];
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
