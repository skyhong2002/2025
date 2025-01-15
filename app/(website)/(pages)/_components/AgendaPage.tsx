"use client";
import DesktopAgenda from "@/app/(website)/(pages)/_components/desktop-agenda";
import MobileAgenda from "@/app/(website)/(pages)/_components/mobile-agenda";
import SessionPopup from "../_components/SessionPopup";
import { useState } from "react";

export default function AgendaPage({
  openSessionID,
}: {
  openSessionID?: string;
}) {
  const [sessionIsOpen, setSessionIsOpen] = useState(
    openSessionID !== undefined,
  );
  console.log(setSessionIsOpen);

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
      {sessionIsOpen && <SessionPopup openSessionID={openSessionID} />}
    </div>
  );
}
