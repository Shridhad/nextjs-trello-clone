import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Project } from "@prisma/client";
import { Chip } from "@nextui-org/chip";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  console.log("Projects: ", project);

  return (
    <Card
      className="bg-background/20 dark:bg-default-100/50 max-w-[400px]"
      isBlurred
      shadow="sm"
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <h3 className="text-lg">{project.name}</h3>
          <Chip color="warning" variant="flat" radius="sm" size="sm">
            {project.type}
          </Chip>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{project.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex flex-grow items-end justify-end">
          <Link href={`/projects/${project.key}`} as={Link} color="primary">
            Load Project
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
