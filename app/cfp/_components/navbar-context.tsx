"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextProps {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: (expanded: boolean) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <NavbarContext.Provider value={{ isNavbarExpanded, setIsNavbarExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};