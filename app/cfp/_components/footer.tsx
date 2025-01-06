import Link from "next/link";
import FacebookLogo from "./logos/facebook";
import FlickrLogo from "./logos/flickr";
import InstagramLogo from "./logos/instagram";
import TelegramLogo from "./logos/telegram";
import ThreadsLogo from "./logos/threads";
import YoutubeLogo from "./logos/youtube";
import SitconLogo from "../../_components/logos/sitcon";

export default function Footer() {
  const navigationLinks = [
    { text: "首頁", href: "/cfp" },
    { text: "一般議程投稿", href: "/cfp/normal" },
    { text: "開放式議程投稿", href: "/cfp/undefined" },
    { text: "海報投稿", href: "/cfp/poster" },
  ];
  return <BaseFooter navigationLinks={navigationLinks} />;
}
