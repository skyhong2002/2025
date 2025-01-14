import React from "react";
import data from "@/app/(website)/_data/agenda.json";
// import timeRender from "@/app/(website)/_utils/time-render";
import SessionCard from "@/app/(website)/_components/SessionCard";

// const sessionType = (type: string) => {
//   switch (type) {
//     case "K":
//       return "bg-background-light text-primary col-span-5";
//     case "E":
//       return "bg-background-light text-primary";
//     case "P":
//       return "bg-background-light text-primary";
//     case "U":
//       return "bg-background-light text-primary";
//     case "Ev":
//       return "bg-background text-white col-span-5";
//     case "PD":
//       return "bg-background text-white";
//     case "L":
//       return "bg-background text-white";
//     case "S":
//       return "bg-background text-white";
//     default:
//       return "";
//   }
// };

// const roomStyle = (room: string, broadcast: string[] | null) => {
//   if (broadcast === null) {
//     switch (room) {
//       case "R0":
//         return "grid";
//       case "R1":
//         return "col-start-3 col-end-3";
//       case "R2":
//         return "col-start-4 col-end-4";
//       case "R3":
//         return "col-start-5 col-end-5";
//       case "S":
//         return "col-start-6 col-end-6";
//     }
//   } else if (broadcast.length === 5) {
//     return "col-start-2 col-end-7";
//   } else {
//   }
// };

const times = [
  "t0830",
  "t0900",
  "t0910",
  "t1000",
  "t1005",
  "t1055",
  "t1105",
  "t1145",
  "t1200",
  "t1230",
  "t1245",
  "t1325",
  "t1335",
  "t1415",
  "t1425",
  "t1435",
  "t1445",
  "t1525",
  "t1605",
  "t1645",
  "t1655",
  "t1745",
  "t1755",
];

const styleToText = (time: string) => {
  // input time format: "t0830"
  // output style format: "08:30"
  return time.replace("t", "").replace(/(\d{2})(\d{2})/, "$1:$2");
};

export default function DesktopAgenda() {
  const gridTemplateColumns = data.rooms.reduce((acc: string, room) => {
    return `${acc} [${room.id}] 1fr`;
  }, "[start] 1fr");
  // start R0 R1 R2 R3 S

  const gridTemplateRows = times.reduce((acc: string, time) => {
    return `${acc} [timeLine-${time}] 1px [${time}] 200px`;
  }, "[start] 1fr [divider] 1px");
  // start divider timeLine-0830 0830 timeLine-1000 1000 ...

  return (
    <div
      className="grid gap-4 space-y-4 text-white"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {/* row1 empty R2 R0 R1 R3 S  */}
      <div></div>
      {data.rooms.map((rooms, index) => (
        <div key={index} className="text-center">
          {rooms.id}
        </div>
      ))}
      {/* row1 empty R2 R0 R1 R3 S  */}

      {/*  divider */}
      <div
        className="h-[1px] w-full bg-white"
        style={{
          gridColumn: "start / end",
          gridRow: "divider / t0830",
        }}
      />
      {/* full divider */}

      {/* all timeLine */}
      {times.map((time) => (
        <div
          key={time}
          className="flex h-[1px] w-full items-center text-white"
          style={{
            gridColumn: "start / end",
            gridRow: `timeLine-${time} / ${time}`,
          }}
        >
          <p>{styleToText(time)}</p>
          <div className="ml-6 h-[1px] w-full bg-white"></div>
        </div>
      ))}
      {/* all timeLine */}
      {/* all sessions */}
      {data.sessions.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}
