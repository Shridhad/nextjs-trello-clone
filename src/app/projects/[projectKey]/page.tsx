import { fetchProject } from "@/src/apis/projects";
import { createIssue } from "./actions";
import CreateNewIssue from "@/src/components/projects/CreateNewIssue";

export type ProjectPageProps = {
  params: {
    projectKey: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectKey } = params;

  const project = await fetchProject(projectKey);

  console.log("Project : ", project);
  if (!project) {
    return (
      <div className="flex items-center">
        No Project Found with key: {projectKey}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-2"></div>
      <div className="col-span-12 lg:col-span-10">
        <div className="w-full gap-2 flex flex-col items-start justify-start p-8">
          <h1 className="text-lg px-2 my-2">{project.name}</h1>
          <p className="text-sm px-2">{project.description}</p>

          <div className="flex gap-4 items-start p-2">
            <CreateNewIssue project={project} create={createIssue} />
          </div>
        </div>
      </div>
    </div>
  );
}
