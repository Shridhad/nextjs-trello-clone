import "./globals.css";
import HeaderNav from "../components/Header/Nav";
import Head from "../components/Head/Head";
import { Divider } from "../components/Divider";
import { Providers } from "./providers";

export default async function RootLayout({
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
          <Divider />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
