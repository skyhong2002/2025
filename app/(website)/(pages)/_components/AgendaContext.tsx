"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SessionContextType {
  sessionIsOpen: boolean;
  openSessionId: string | null;
  setSessionIsOpen: (isOpen: boolean) => void;
  setOpenSessionId: (id: string | null) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionIsOpen, setSessionIsOpen] = useState(false);
  const [openSessionId, setOpenSessionId] = useState<string | null>(null);

  return (
    <SessionContext.Provider
      value={{
        sessionIsOpen,
        openSessionId,
        setSessionIsOpen,
        setOpenSessionId,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession  must be used within a NavbarProvider");
  }
  return context;
};
