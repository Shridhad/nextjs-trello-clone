import "./globals.css";
import HeaderNav from "../components/Header/Nav";
import Head from "../components/Head/Head";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head />
      <body className="bg-background">
        <div className="min-h-screen flex flex-col items-center">
          <HeaderNav />
          <main className="w-full flex flex-col items-stretch flex-grow gap-14 max-w-6xl px-3 py-3 text-foreground">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
