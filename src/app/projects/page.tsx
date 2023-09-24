import { fetchProjects } from "@/src/apis/projects";
import CreateNewProject from "@/src/components/projects/CreateNewProject";
import { ProjectCard } from "@/src/components/projects/ProjectCard";
import { create } from "./action";

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <>
      <CreateNewProject create={create} />
      <div className="gap-2 grid grid-cols-3 animate-in opacity-0">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.key} />
        ))}
      </div>
    </>
  );
}
