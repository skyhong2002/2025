"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAgendaPage = pathname.startsWith("/agenda");

  return (
    <div className="flex w-full justify-center bg-background text-foreground">
      <div
        className={cn(
          "flex w-full max-w-[90%] flex-col justify-center px-4 py-40",
          isAgendaPage
            ? "desktop:max-w-[1220px]"
            : "lg:max-w-[840px] desktop:max-w-[1120px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
