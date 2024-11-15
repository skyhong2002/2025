import TableOfContent from "@/app/(cfp)/(submission)/_components/table-of-content";

export default function Page() {
  return (
    // <></>
    <div className="relative h-[2000px] w-full">
      <TableOfContent theme="light" />
      <div className="h-[500px]"></div>
      <section id="important-dates" className="bg-none">
        important Dates
      </section>
    </div>
  );
}
