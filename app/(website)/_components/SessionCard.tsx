import React from "react";

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
  return (
    <div
      key={session.id}
      className="flex items-center justify-center bg-slate-600 text-white"
      style={{
        gridColumn: "R1 / R2",
        gridRow: "t1230 / t1245",
      }}
    >
      {session.zh.title}
    </div>
  );
};

export default SessionCard;
