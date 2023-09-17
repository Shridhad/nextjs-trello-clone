"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="">
      <main className="w-full flex flex-col items-stretch flex-grow gap-14 py-3 text-foreground">
        {children}
      </main>
    </NextUIProvider>
  );
}
