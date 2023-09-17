import { Divider as NextUIDivider } from "@nextui-org/divider";

export function Divider({
  className = "",
  orientation,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const classes = `${className} bg-gradient-to-r from-indigo-500/30 via-purple-500 to-indigo-500/30`;
  return <NextUIDivider className={classes} orientation={orientation} />;
}
