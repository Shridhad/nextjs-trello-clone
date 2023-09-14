import {
  createServerComponentClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import LogoutButton from "../LogoutButton";

export default async function HeaderNav() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10">
      <div className="w-full max-w-4xl flex justify-end items-end gap-3 p-3 text-sm text-foreground">
        {user ? (
          <div className="flex items-center gap-4">
            Hey, {user.email}!
            <LogoutButton />
          </div>
        ) : (
          <Link
            href="/login"
            className="py-2 px-3 row-span-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Login
          </Link>
        )}
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
