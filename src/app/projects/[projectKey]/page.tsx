import { fetchProject } from "@/src/apis/projects";
import { createIssue, createNewList } from "./actions";
import CreateNewIssue from "@/src/components/projects/CreateNewIssue";
import CreateNewList from "@/src/components/projects/CreateNewList";

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

  console.log("project: ", project);

  return (
    <div className="grid grid-cols-12 animate-in opacity-0">
      <div className="col-span-12 lg:col-span-12 border-l-default-100 border-solid border-l-small">
        <div className="w-full gap-2 flex flex-col items-start justify-start p-8">
          <h1 className="text-lg px-2 my-2">{project.name}</h1>
          <p className="text-sm px-2">{project.description}</p>
          <pre>{JSON.stringify(project)}</pre>
          <div className="flex gap-4 items-start p-2">
            <CreateNewList projectKey={project.id} create={createNewList} />
            <CreateNewIssue project={project} create={createIssue} />
          </div>
        </div>
      </div>
    </div>
  );
}
