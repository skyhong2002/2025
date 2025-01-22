import BaseFooter from "@/app/_components/footer";

export default function Footer() {
  const navigationLinks = [
    { href: "/", text: "首頁" },
    { href: "/tickets/", text: "活動報名" },
    { href: "/traffic/", text: "交通方式" },
    // { href: "/2025/sponsor/", text: "合作夥伴" },
  ];
  return <BaseFooter navigationLinks={navigationLinks} />;
}
