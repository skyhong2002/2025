import React from "react";
import data from "@/app/(website)/_data/agenda.json";
import SessionCard from "@/app/(website)/(pages)/_components/SessionCard";

// 新的議程表json改變，請改變times的height來調整議程表的高度
const times = [
  { id: "t0830", height: "0.5fr" },
  { id: "t0900", height: "0.5fr" },
  { id: "t0910", height: "1fr" },
  { id: "t1000", height: "0.5fr" },
  { id: "t1005", height: "1fr" },
  { id: "t1055", height: "0.5fr" },
  { id: "t1105", height: "1fr" },
  { id: "t1145", height: "0.01fr" },
  { id: "t1200", height: "1fr" },
  { id: "t1230", height: "0.01fr" },
  { id: "t1245", height: "1fr" },
  { id: "t1325", height: "0.5fr" },
  { id: "t1335", height: "1fr" },
  { id: "t1415", height: "0.5fr" },
  { id: "t1425", height: "1fr" },
  { id: "t1435", height: "0.5fr" },
  { id: "t1445", height: "1fr" },
  { id: "t1525", height: "0.5fr" },
  { id: "t1605", height: "1fr" },
  { id: "t1645", height: "0.5fr" },
  { id: "t1655", height: "1fr" },
  { id: "t1745", height: "0.5fr" },
  { id: "t1755", height: "0.5fr" },
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
    return `${acc} [timeLine-${time.id}] 1px [${time.id}] ${time.height}`;
  }, "[start] 30px [divider] 1px");
  // start divider timeLine-0830 0830 timeLine-1000 1000 ...

  return (
    <div
      className="grid h-full gap-4 text-white"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {/* row1 empty R2 R0 R1 R3 S  */}
      <div></div>
      {data.rooms.map((rooms, index) => (
        <div key={index} className="text-center text-[24px] font-bold">
          {rooms.id}
        </div>
      ))}
      {/* row1 empty R2 R0 R1 R3 S  */}

      {/* full  divider */}
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
          key={time.id}
          className="mt-2 flex h-full w-full items-center text-white"
          style={{
            gridColumn: "start / end",
            gridRow: `timeLine-${time.id} / ${time.id}`,
          }}
        >
          <p>{styleToText(time.id)}</p>
          <hr className="ml-6 w-full bg-white" />
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
