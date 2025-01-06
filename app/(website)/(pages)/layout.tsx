import { ReactNode } from "react";

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
