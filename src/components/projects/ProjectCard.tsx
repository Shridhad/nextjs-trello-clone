import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@/src/components/Divider";
import { Project } from "@prisma/client";
import { Chip } from "@nextui-org/chip";

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      isBlurred
      className="max-w-[400px] group border hover:border-foreground card-bg"
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
      <CardFooter className="justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </CardFooter>
    </Card>
  );
}
