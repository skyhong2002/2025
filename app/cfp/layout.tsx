import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { NavbarProvider } from "./_components/navbar-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        {children}
        <div className="w-full bg-background-light">
          <div className="mx-auto max-w-[1120px]">
            <Footer />
          </div>
        </div>
      </NavbarProvider>
    </>
  );
}
