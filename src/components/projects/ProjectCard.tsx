import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@/src/components/Divider";
import { Project } from "@prisma/client";
import { Chip } from "@nextui-org/chip";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  console.log("Projects: ", project);

  return (
    <Card
      className="max-w-[400px] cursor-pointer"
      shadow="sm"
      as={Link}
      href={`/projects/${project.key}`}
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
    </Card>
  );
}
