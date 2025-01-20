"use client";
import DesktopAgenda from "@/app/(website)/(pages)/_components/desktop-agenda";
import MobileAgenda from "@/app/(website)/(pages)/_components/mobile-agenda";
import SessionPopup from "./SessionPopup";
import { SessionProvider, useSession } from "./AgendaContext";
import { useEffect } from "react";

export default function AgendaPage({
  openSessionID,
}: {
  openSessionID?: string;
}) {
  return (
    <SessionProvider>
      <PageContent openSessionID={openSessionID} />
    </SessionProvider>
  );
}

const PageContent = ({ openSessionID }: { openSessionID?: string }) => {
  const { sessionIsOpen, setOpenSessionId, setSessionIsOpen, openSessionId } =
    useSession();
  // openSessionID 是從URL query string取得的初始值
  // openSessionId 是在SessionContext中的state，打開關閉popup時會改變，控制SessionPopup的資料
  useEffect(() => {
    if (openSessionID) setOpenSessionId(openSessionID);
    if (openSessionID) setSessionIsOpen(true);
  }, [openSessionID, setOpenSessionId, setSessionIsOpen]);

  return (
    <div className="w-full">
      <h1 className="text-h1-mobile text-white md:text-h1">年會議程表</h1>
      <div className="mt-4">
        <div className="hidden md:block">
          <DesktopAgenda />
        </div>
        <div className="md:hidden">
          <MobileAgenda />
        </div>
      </div>
      {sessionIsOpen && <SessionPopup openSessionId={openSessionId} />}
    </div>
  );
};
