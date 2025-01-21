import React from "react";
import data from "@/app/(website)/_data/agenda.json";
import { useSession } from "./AgendaContext";
import timeRender from "@/app/(website)/_utils/time-render";
import Markdown from "react-markdown";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

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

  const getTimeText = (start: string, end: string) => {
    return `${timeRender(start)} - ${timeRender(end)}`;
  };

  const speakers = session.speakers.map((speakerId) => {
    return data.speakers.find((speaker) => speaker.id === speakerId);
  });

  const handleClose = () => {
    setSessionIsOpen(false);
    history.pushState(null, "", `/2025/agenda/`);
  };

  return (
    <>
      {/* 遮罩 */}
      <div className="fixed inset-0 z-20 h-[100vh] w-[100vw] bg-[black]/30 backdrop-blur-sm" />
      {/* 彈出面板 */}
      TODO::新的卷軸樣式、彈出動畫
      <div className="fixed left-[50%] top-[50%] z-30 h-[80vh] w-full translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-3xl bg-[#ffffff] p-6 text-black md:w-[90vw] md:p-10">
        <div className="flex flex-col gap-2">
          <div className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center self-end rounded-full bg-[#304878]">
            <button
              onClick={handleClose}
              className="material-symbols-outlined !text-[16px] !font-bold text-[#ffffff]"
            >
              close
            </button>
          </div>
          <div className="flex max-w-full flex-col gap-3 md:max-w-[60%]">
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
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined !text-[24px] !font-bold">
                  schedule
                </span>
                <p className="text-[16px] font-bold">
                  {getTimeText(session.start, session.end)}
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <span className="material-symbols-outlined !text-[24px] !font-bold">
                  location_on
                </span>
                <p className="text-[16px] font-bold">{session.room}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex w-full flex-col gap-10 md:flex-row">
              <div className="flex w-full flex-col gap-2 md:w-[65%]">
                <div className="flex flex-row">
                  <div className="w-[50%]">目標聽眾</div>
                  <div className="w-[50%]">先備知識</div>
                </div>
                <h2 className="text-h3-mobile font-bold">議程介紹：　</h2>
                <Markdown className="space-y-4 leading-7 max-md:text-sm">
                  {session.zh.description}
                </Markdown>
              </div>
              <div className="flex w-full flex-col gap-3 md:w-[35%]">
                {session.record && (
                  <YouTubeEmbed
                    style="border-radius: 20px;"
                    videoid={session.record.replace("https://youtu.be/", "")}
                  />
                )}
                <div className="flex flex-row justify-between gap-2">
                  <button
                    onClick={() => {
                      if (session.qa) window.open(session.qa, "_blank");
                    }}
                    className="flex-grow rounded-full bg-[#B9D3E6] py-1.5 text-center text-[16px] font-bold"
                  >
                    即時提問
                  </button>
                  <button
                    onClick={() => {
                      if (session.slide) window.open(session.slide, "_blank");
                    }}
                    className="flex-grow rounded-full bg-[#B9D3E6] py-1.5 text-center text-[16px] font-bold"
                  >
                    簡報連結
                  </button>
                  <button
                    onClick={() => {
                      if (session.co_write)
                        window.open(session.co_write, "_blank");
                    }}
                    className="flex-grow rounded-full bg-[#B9D3E6] py-1.5 text-center text-[16px] font-bold"
                  >
                    共筆連結
                  </button>
                </div>
              </div>
            </div>

            {speakers &&
              speakers.map((speaker) => (
                <div
                  key={speaker?.id}
                  className="flex w-full flex-col gap-10 md:flex-row"
                >
                  <div className="flex flex-col gap-4 md:w-[65%]">
                    <div className="text-2xl font-bold">{speaker?.zh.name}</div>
                    <Markdown className="space-y-4 leading-7 max-md:text-sm">
                      {speaker?.zh.bio}
                    </Markdown>
                  </div>
                  {speaker?.avatar && (
                    <div className="md:w-[35%]">
                      <Image
                        layout="responsive"
                        alt="speaker"
                        style={{ borderRadius: "20px" }}
                        src={speaker?.avatar}
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionPopup;
