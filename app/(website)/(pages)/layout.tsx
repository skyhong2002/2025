import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full justify-center bg-background text-foreground">
      <div className="flex w-full max-w-[90%] justify-center py-40 md:max-w-[80%]">
        {children}
      </div>
    </div>
  );
}
