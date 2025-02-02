"use client";

import BaseNavbar from "@/app/_components/navbar";

export default function Navbar() {
  return (
    <>
      <BaseNavbar
        logoHref="/"
        menuItems={[
          { link: "/events/", label: "年會活動" },
          { link: "/agenda/", label: "議程表" },
          { link: "/poster/", label: "海報展" },
          { link: "/venue/", label: "會場地圖" },
          { link: "/traffic/", label: "交通方式" },
          { link: "/tickets/", label: "活動報名" },
          { link: "/staff/", label: "SITCON 團隊" },
          { link: "/sponsor/", label: "合作夥伴" },
        ]}
      />
    </>
  );
}
