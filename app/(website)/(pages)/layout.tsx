import { ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { NavbarProvider } from "@/app/cfp/_components/navbar-context";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full justify-center bg-background text-foreground">
      <div className="flex w-full max-w-[90%] justify-center py-40 md:max-w-[80%]">
        {children}
      </div>
    </div>
  );
}
