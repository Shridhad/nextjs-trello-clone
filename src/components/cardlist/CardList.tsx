import { CardList, Project } from "@/src/apis/types";
import CreateNewIssue from "../projects/CreateNewIssue";
import { Card } from "@nextui-org/card";

type CardListProps = {
  list: CardList;
  project: Project;
  className?: string;
  create: (form: FormData) => any;
};

export async function CardList({
  list,
  project,
  className = "",
  create,
}: CardListProps) {
  return (
    <Card className={`col-span-4 h-full p-2`}>
      <h3 className="font-bold uppercase text-center px-3 py-2">
        {list.title}
      </h3>
      <div className="p-2 h-full">
        <CreateNewIssue project={project} create={create} />
      </div>
    </Card>
  );
}
