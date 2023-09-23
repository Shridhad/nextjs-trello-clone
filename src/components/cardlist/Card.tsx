import { Card, CardList } from "@/src/apis/types";
import { Card as UICard } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

type CardProps = {
  card: Card;
};

export async function CardComponent({ card }: CardProps) {
  return (
    <UICard
      isHoverable
      className={`py-0 px-1 bg-transparent items-start hover:bg-indigo-500/30 shadow-none animate-in`}
      radius="sm"
      as={Button}
    >
      <p className="px-1 py-1 border-b-solid text-left text-small">
        {card.title}
      </p>
    </UICard>
  );
}
