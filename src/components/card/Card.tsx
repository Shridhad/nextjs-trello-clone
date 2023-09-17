import { Card, CardList } from "@/src/apis/types";
import { Card as UICard } from "@nextui-org/card";

type CardProps = {
  card: Card;
};

export async function CardComponent({ card }: CardProps) {
  return (
    <UICard className={`p-2 bg-default-100`} radius="sm">
      <p className="px-1 py-1 border-b-solid text-small">{card.title}</p>
    </UICard>
  );
}
