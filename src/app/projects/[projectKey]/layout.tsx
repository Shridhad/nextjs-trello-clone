export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full flex">
      <div className="flex-grow">{children}</div>
    </div>
  );
}
