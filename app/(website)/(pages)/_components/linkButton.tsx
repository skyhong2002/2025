import { cn } from "@/lib/utils";

export default function LinkButton({
  link,
  text,
  className,
  target,
}: {
  link: string;
  text: string;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={link}
      target={target ?? "_self"}
      className={cn(
        `text-nowrap rounded-full bg-primary p-3 px-6 text-center text-normal font-bold text-black hover:brightness-110`,
        className,
      )}
    >
      {text}
    </a>
  );
}
