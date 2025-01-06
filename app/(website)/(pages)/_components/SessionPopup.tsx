import React from "react";

const SessionPopup = ({ openSessionID }: { openSessionID?: string }) => {
  return (
    <div className="fixed inset-0 h-[100vh] w-[100vw] bg-white opacity-50">
      SessionPopup {openSessionID}
    </div>
  );
};

export default SessionPopup;
