"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="w-full flex-col flex-grow flex items-stretch">
      {children}
    </NextUIProvider>
  );
}
