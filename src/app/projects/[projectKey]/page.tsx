import { fetchProject } from "@/src/apis/projects";
import { createIssue, createNewList } from "./actions";
import CreateNewIssue from "@/src/components/projects/CreateNewIssue";
import CreateNewList from "@/src/components/projects/CreateNewList";
import { CardList } from "@/src/components/cardlist/CardList";

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
    <div className="min-h-full grid grid-cols-12 animate-in opacity-0 flex-grow">
      <div className="col-span-12 lg:col-span-12 border-l-default-100 border-solid border-l-small w-full gap-2 flex flex-col items-start justify-start py-4 px-6">
        <h1 className="text-lg px-2 my-2">{project.name}</h1>
        <div className="w-full grid grid-cols-12 animate-in opacity-0 gap-3">
          {project.CardList.map((list) => {
            return (
              <CardList
                key={list.id}
                list={list}
                project={project}
                create={createIssue}
              />
            );
          })}
          <div className="col-span-4 flex gap-4 items-start p-2">
            <CreateNewList projectKey={project.id} create={createNewList} />
          </div>
        </div>
      </div>
    </div>
  );
}
