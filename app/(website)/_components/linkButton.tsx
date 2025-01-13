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
      className={`text-nowrap rounded-full bg-primary p-3 px-6 text-center text-normal font-bold text-black ${className} hover:brightness-110`}
    >
      {text}
    </a>
  );
}
