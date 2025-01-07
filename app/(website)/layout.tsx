import { ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { NavbarProvider } from "@/app/cfp/_components/navbar-context";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NavbarProvider>
    </>
  );
}
