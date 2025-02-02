import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center bg-background text-foreground">
      <div className="flex max-w-[90%] justify-center py-28 md:max-w-[65%] md:py-40 lg:max-w-[50%]">
        {children}
      </div>
    </div>
  );
}
