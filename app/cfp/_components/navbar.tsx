"use client";

import { useNavbar } from "./navbar-context";
import BaseNavbar from "@/app/_components/navbar";

export default function Navbar() {
  const { setIsNavbarExpanded } = useNavbar();
  return (
    <>
      <BaseNavbar
        menuItems={[
          { link: "/cfp/", label: "首頁" },
          { link: "/cfp/normal/", label: "一般議程徵稿" },
          { link: "/cfp/undefined/", label: "開放式議程徵稿" },
          { link: "/cfp/poster/", label: "海報徵稿" },
        ]}
        onMenuClick={(prev) => {
          setIsNavbarExpanded(!prev);
        }}
      />
    </>
  );
}
