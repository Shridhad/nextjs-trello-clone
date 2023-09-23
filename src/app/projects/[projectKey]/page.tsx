import { fetchProject } from "@/src/apis/projects";
import { createIssue, createNewList } from "./actions";
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

  if (!project) {
    return (
      <div className="flex items-center">
        No Project Found with key: {projectKey}
      </div>
    );
  }

  return (
    <div className="gap-2 flex flex-col">
      <div className="py-2 animate-in  bg-gradient-to-r from-indigo-500/30 rounded-sm">
        <h1 className="text-lg px-2">{project.name}</h1>
      </div>
      <div className="flex flex-nowrap animate-in opacity-0 gap-3">
        {project.CardList.map((list) => {
          return (
            <div className="w-80" key={list.id}>
              <CardList
                key={list.id}
                list={list}
                project={project}
                create={createIssue}
              />
            </div>
          );
        })}
        <div className="p-2">
          <CreateNewList projectId={project.id} create={createNewList} />
        </div>
      </div>
    </div>
  );
}
