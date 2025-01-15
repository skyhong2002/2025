import React from "react";
import timeRender from "@/app/(website)/_utils/time-render";
type Session = {
  id: string;
  type: string;
  room: string;
  broadcast: string[] | null;
  start: string;
  end: string;
  qa: string | null;
  slide: string | null;
  co_write: string | null;
  record: string | null;
  live: string | null;
  language: string | null;
  uri: string | null;
  zh: { title: string; description: string };
  en: { title: string; description: string };
  speakers: string[];
  tags: string[];
  "": null;
};

const SessionCard = ({ session }: { session: Session }) => {
  const getRoom = (broadcast: string[] | null, room: string) => {
    if (broadcast === null) {
      switch (room) {
        case "R0":
          return ["R0", "R1"];
        case "R1":
          return ["R1", "R2"];
        case "R2":
          return ["R2", "R3"];
        case "R3":
          return ["R3", "S"];
        case "S":
          return ["S", "S"];
      }
    }
    if (broadcast) {
      switch (broadcast[broadcast.length - 1]) {
        case "R0":
          return [broadcast[0], "R1"];
        case "R1":
          return [broadcast[0], "R2"];
        case "R2":
          return [broadcast[0], "R3"];
        case "R3":
          return [broadcast[0], "S"];
        case "S":
          return [broadcast[0], "end"];
      }
    }
    return ["", ""];
  };

  const textToStyle = (time: string) => {
    // input style format: "08:30"
    // ouput time format: "t0830"
    return time.replace(":", "").replace(/(\d{2})(\d{2})/, "t$1$2");
  };

  const startTime = textToStyle(timeRender(session.start));
  const endTime = textToStyle(timeRender(session.end));
  const sessionStyle = (type: string) => {
    const lightStyle = "bg-background-light text-primary";
    const darkStyle = "bg-background text-white";
    switch (type) {
      case "K":
        return lightStyle;
      case "E":
        return lightStyle;
      case "P":
        return lightStyle;
      case "U":
        return lightStyle;
      case "Ev":
        return darkStyle;
      case "PD":
        return darkStyle;
      case "L":
        return darkStyle;
      case "S":
        return darkStyle;
      default:
        return "";
    }
  };

  const [startRoom, endRoom] = getRoom(session.broadcast, session.room);

  return (
    <div
      key={session.id}
      className={`flex h-full w-full items-center justify-center rounded-lg border bg-slate-600 text-white ${sessionStyle(session.type)}`}
      style={{
        gridColumn: `${startRoom} / ${endRoom}`,
        gridRow: `${startTime} / ${endTime}`,
      }}
    >
      {session.zh.title}
    </div>
  );
};

export default SessionCard;
