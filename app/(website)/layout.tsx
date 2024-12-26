import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center bg-background text-foreground">
      <div className="flex max-w-[90%] justify-center py-20 md:max-w-[65%] lg:max-w-[65%]">
        {children}
      </div>
    </div>
  );
}
