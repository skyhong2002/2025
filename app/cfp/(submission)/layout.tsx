import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center bg-background text-foreground">
      <div className="max-w-[90%] py-20 md:max-w-[65%] lg:max-w-[50%]">
        {children}
      </div>
    </div>
  );
}
