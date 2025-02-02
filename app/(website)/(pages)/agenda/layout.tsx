import AgendaPage from "@/app/(website)/(pages)/_components/AgendaPage";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AgendaPage>
      <AnimatePresence>{children}</AnimatePresence>
    </AgendaPage>
  );
}
