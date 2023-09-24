import { getServerAuthSession } from "@/src/app/api/auth/[...nextauth]/route";
import { Link } from "@nextui-org/link";
import { signIn, signOut } from "next-auth/react";

export default async function HeaderNav() {
  const session = await getServerAuthSession();

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
        {!session && (
          <Link
            href="/api/auth/signin"
            className="py-2 px-3 row-span-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Sign In
          </Link>
        )}
        {session && (
          <Link
            href="/api/auth/signout"
            className="py-2 px-3 row-span-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Sign out
          </Link>
        )}
      </div>
    </nav>
  );
}
