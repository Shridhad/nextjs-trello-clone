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
        <div className="min-h-screen bg-background flex flex-col items-center">
          <HeaderNav />
          <main className="min-h-screen w-full bg-background flex flex-col ">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
