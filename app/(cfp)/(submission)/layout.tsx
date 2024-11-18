import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue text-light-brown">
      <div className="mx-auto max-w-[345px] mobile:max-w-[645px] tablet:max-w-[840px] desktop:max-w-[1120px]">
        {children}
      </div>
    </div>
  );
}
