import TableOfContent from "@/app/(cfp)/(submission)/_components/table-of-content";

export default function Home() {
  return (
    <div className="relative h-[2000px] w-full">
      <TableOfContent />
      <section id="important-dates" className="mt-[500px]">
        important Dates
      </section>
    </div>
  );
}
