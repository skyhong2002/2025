import BaseFooter from "@/app/_components/footer";

export default function Footer() {
  const navigationLinks = [
    { href: "/", text: "首頁" },
    { href: "/events/", text: "年會活動" },
    { href: "/agenda/", text: "議程表" },
    { href: "/poster/", text: "海報展" },
    { href: "/venue/", text: "會場地圖" },
    { href: "/traffic/", text: "交通方式" },
    { href: "/tickets/", text: "活動報名" },
    { href: "/staff/", text: "SITCON 團隊" },
    { href: "/sponsor/", text: "合作夥伴" },
  ];
  return <BaseFooter navigationLinks={navigationLinks} />;
}
