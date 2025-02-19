"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAgendaPage = pathname.startsWith("/agenda");

  return (
    <div className="flex w-full justify-center bg-background px-2 text-foreground lg:px-4">
      <div
        className={cn(
          "flex w-full flex-col justify-center py-40",
          isAgendaPage
            ? "pl-5 pr-2 lg:container"
            : "max-w-[90%] lg:max-w-[840px] desktop:max-w-[1120px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
