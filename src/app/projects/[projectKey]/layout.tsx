import { Divider } from "@nextui-org/divider";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex py-6">
      <div className="flex-grow">{children}</div>
    </div>
  );
}
