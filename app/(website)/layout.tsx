"use client";

import { ReactNode, useLayoutEffect, useState } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { NavbarProvider } from "@/app/cfp/_components/navbar-context";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: ReactNode }) {
  const [isIndex, setIsIndex] = useState(true);
  const pathname = usePathname();
  useLayoutEffect(() => {
    setIsIndex(pathname === "/");
  }, [pathname]);
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <main
          className={cn({
            "mt-16": isIndex,
          })}
        >
          {children}
        </main>
        <Footer />
      </NavbarProvider>
    </>
  );
}
