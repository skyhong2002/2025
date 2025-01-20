import React from "react";
import data from "@/app/(website)/_data/agenda.json";
import { useSession } from "./AgendaContext";

const SessionPopup = ({ openSessionId }: { openSessionId: string | null }) => {
  const session = data.sessions.find((session) => session.id === openSessionId);
  const { setSessionIsOpen } = useSession();

  if (!session) return null;

  const getSessionName = (type: string) => {
    switch (type) {
      case "K":
        return "Keynote";
      case "P":
        return "Presentation";
      case "E":
        return "Espresso";
      case "S":
        return "合作議程";
      case "PD":
        return "論壇";
      case "U":
        return "開放式議程";
      case "L":
        return "Lightning Talk";
      default:
        return "";
    }
  };

  const handleClose = () => {
    setSessionIsOpen(false);
    history.pushState(null, "", `/agenda/`);
  };

  return (
    <>
      {/* 遮罩 */}
      <div className="fixed inset-0 z-20 h-[100vh] w-[100vw] bg-black opacity-30" />
      {/* 彈出面板 */}
      <div className="fixed left-[50%] top-[50%] z-30 h-[80vh] w-full translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-[#ffffff] p-6 text-black md:w-[80vw] md:p-10">
        <div className="flex flex-col gap-2">
          <div className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center self-end rounded-full bg-[#304878]">
            <button
              onClick={handleClose}
              className="material-symbols-outlined !text-[16px] font-bold text-[#ffffff]"
            >
              close
            </button>
          </div>
          <div className="flex max-w-full flex-col gap-3 md:max-w-[70%]">
            <div className="flex items-center gap-2">
              <h2 className="self-start text-[20px] font-medium md:self-center">
                {getSessionName(session.type)}
              </h2>
              <div className="flex flex-row gap-2">
                {session.tags.map((tag) => (
                  <span
                    className="rounded-full bg-[#D9D9D9] px-3 py-1.5 text-[12px]"
                    key={tag}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-h2-mobile font-bold md:text-h2">
              {session.zh.title}
            </h1>
            <div className="flex flex-row gap-2">
              <span className="material-symbols-outlined text-[24px]">
                schedule
              </span>
              <span className="material-symbols-outlined text-[24px]">
                location_on
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* 內容 */}
            <div></div>
            {/* 影片 */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionPopup;
