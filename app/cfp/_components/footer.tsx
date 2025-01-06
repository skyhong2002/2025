import BaseFooter from "@/app/_components/footer";

export default function Footer() {
  const navigationLinks = [
    { text: "首頁", href: "/cfp" },
    { text: "一般議程投稿", href: "/cfp/normal" },
    { text: "開放式議程投稿", href: "/cfp/undefined" },
    { text: "海報投稿", href: "/cfp/poster" },
  ];
  return <BaseFooter navigationLinks={navigationLinks} />;
}
