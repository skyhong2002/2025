import { ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
