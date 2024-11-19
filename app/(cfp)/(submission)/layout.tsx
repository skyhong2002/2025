import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center bg-blue text-light-brown">
      <div className="max-w-[90%] md:max-w-[65%]">{children}</div>
    </div>
  );
}
