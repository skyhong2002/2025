"use client";

import BaseNavbar from "@/app/_components/navbar";

export default function Navbar() {
  return (
    <>
      <BaseNavbar
        logoHref="/"
        menuItems={[
          { link: "/", label: "首頁" },
          { link: "/tickets/", label: "活動報名" },
          { link: "/traffic/", label: "交通方式" },
          // { link: "/2025/sponsor/", label: "合作夥伴" },
        ]}
      />
    </>
  );
}
