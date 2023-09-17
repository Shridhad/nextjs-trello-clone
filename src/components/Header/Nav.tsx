import { Link } from "@nextui-org/link";

export default async function HeaderNav() {
  return (
    <nav className="w-full flex justify-center">
      <div className="w-full flex justify-end items-end gap-3 p-3 text-sm text-foreground">
        <Link
          href="/"
          className="py-2 px-3 row-span-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="py-2 px-3 row-span-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
