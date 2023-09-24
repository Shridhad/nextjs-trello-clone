import { fetchProject } from "@/src/apis/projects";
import { createIssue } from "./actions";
import { IssueCard } from "@/src/components/projects/IssueCard";
import CreateNewIssue from "@/src/components/projects/CreateNewIssue";
import { logger } from "@/src/logger";

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

  logger.info("project: ", project);

  return (
    <div className="gap-2 flex flex-col">
      <div className="py-2 animate-in  bg-gradient-to-r from-indigo-500/30 rounded-sm">
        <h1 className="text-lg px-2">{project.name}</h1>
      </div>
      <CreateNewIssue project={project} create={createIssue} />
      <div className="flex flex-nowrap animate-in opacity-0 gap-3">
        {project.issues.map((issue) => {
          return (
            <div className="w-80" key={issue.id}>
              <IssueCard key={issue.id} card={issue} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
