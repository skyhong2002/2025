import React from "react";
import data from "@/app/(website)/_data/agenda.json";
import timeRender from "@/app/(website)/_utils/time-render";

const sessionType = (type: string) => {
  switch (type) {
    case "K":
      return "bg-background-light text-primary col-span-5";
    case "E":
      return "bg-background-light text-primary";
    case "P":
      return "bg-background-light text-primary";
    case "U":
      return "bg-background-light text-primary";
    case "Ev":
      return "bg-background text-white col-span-5";
    case "PD":
      return "bg-background text-white";
    case "L":
      return "bg-background text-white";
    case "S":
      return "bg-background text-white";
    default:
      return "";
  }
};

const roomStyle = (room: string, broadcast: string[] | null) => {
  if (broadcast === null) {
    switch (room) {
      case "R0":
        return "col-start-2 col-end-2";
      case "R1":
        return "col-start-3 col-end-3";
      case "R2":
        return "col-start-4 col-end-4";
      case "R3":
        return "col-start-5 col-end-5";
      case "S":
        return "col-start-6 col-end-6";
    }
  } else if (broadcast.length === 5) {
    return "col-start-2 col-end-7";
  } else {
  }
};

export default function DesktopAgenda() {
  return (
    <div className="grid grid-cols-6 gap-4 space-y-4 text-white">
      <div></div>
      {data.rooms.map((rooms, index) => (
        <div key={index} className="text-center">
          {rooms.id}
        </div>
      ))}
      <hr className="col-span-6" />
      {data.sessions.map((sessions, index) => {
        const showTime =
          index === 0 || sessions.start !== data.sessions[index - 1].start;
        return (
          <React.Fragment key={index}>
            {showTime && (
              <div className="relative">
                <p>{timeRender(sessions.start)}</p>
                <div className=""></div>
              </div>
            )}
            <div
              className={`rounded-lg border p-4 text-center ${sessionType(sessions.type)} ${roomStyle(sessions.room, sessions.broadcast)}`}
            >
              {sessions.zh.title}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
