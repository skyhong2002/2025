import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full justify-center bg-background text-foreground">
      <div className="flex w-full max-w-[90%] flex-col justify-center py-40 lg:max-w-[840px] desktop:max-w-[1120px]">
        {children}
      </div>
    </div>
  );
}
