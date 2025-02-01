import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full justify-center bg-background text-foreground">
      <div className="flex w-full max-w-[90%] flex-col justify-center px-4 py-40 desktop:max-w-[1220px]">
        {children}
      </div>
    </div>
  );
}
