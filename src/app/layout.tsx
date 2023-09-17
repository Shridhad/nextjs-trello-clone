import "./globals.css";
import HeaderNav from "../components/Header/Nav";
import Head from "../components/Head/Head";
import { Divider } from "../components/Divider";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head />
      <body className="bg-background bg-gradient-to-r  from-indigo-500/30 via-purple-500/30 to-indigo-500/20">
        <div
          className="min-h-screen flex flex-col max-w-6xl mx-auto
        "
        >
          <HeaderNav />
          <Divider className="flex min-w-screen " />
          <main className="w-full flex flex-col items-stretch flex-grow gap-14  px-3 py-3 text-foreground">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
