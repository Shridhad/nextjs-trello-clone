import { fetchProjects } from "@/src/apis/projects";
import { ProjectCard } from "@/src/components/projects/ProjectCard";
export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="gap-2 grid grid-cols-3 grid-rows-2 animate-in opacity-0">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
