import { Card, CardList, Project } from "@/src/apis/types";
import CreateNewIssue from "../projects/CreateNewIssue";
import { Card as UICard, CardHeader, CardBody } from "@nextui-org/card";
import { CardComponent } from "../card/Card";
import { Divider } from "@/src/components/Divider";

type CardListProps = {
  list: CardList;
  project: Project;
  create: (title: string, description: string, listId: string) => any;
};

export async function CardList({ list, project, create }: CardListProps) {
  return (
    <UICard className="p-2 backdrop-blur-lg backdrop-saturate-[1.8] shadow-medium">
      <CardHeader className="p-0 items-start flex-col">
        <h3 className="font-bold py-2">{list.title}</h3>
        <Divider />
      </CardHeader>
      <CardBody className="p-0">
        <div className="p-2 h-full flex flex-col gap-2">
          {list.Card.map((card: Card) => (
            <CardComponent card={card} />
          ))}
          <CreateNewIssue project={project} listId={list.id} create={create} />
        </div>
      </CardBody>
    </UICard>
  );
}
