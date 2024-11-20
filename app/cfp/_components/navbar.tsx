"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo_black.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { link: "/cfp/", label: "首頁" },
    { link: "/cfp/theme", label: "年會主題" },
    { link: "/cfp/normal", label: "一般議程徵稿" },
    { link: "/cfp/undefined", label: "開放式議程徵稿" },
    { link: "/cfp/poster", label: "海報徵稿" },
  ];
  return (
    <nav className="sticky left-0 right-0 top-0 z-20 flex justify-center bg-blue">
      <div className="w-full max-w-[840px] desktop:max-w-[1120px]">
        <ul className="relative flex w-full items-center justify-between p-4 max-[750px]:justify-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              className="-translate-y-1"
              width={130}
              height={65}
            />
          </Link>
          <ul className="flex items-center justify-end gap-8 text-black max-[750px]:hidden">
            {menuItems.map(({ link, label }) => (
              <NavbarItem key={link} link={link}>
                <motion.p
                  initial={{ y: 0, scale: 1 }}
                  whileHover={{ y: -2, scale: 1.2 }}
                  className="font-bold hover:text-white"
                >
                  {label}
                </motion.p>
              </NavbarItem>
            ))}
          </ul>

          <AnimatePresence mode="wait">
            <motion.div
              className="absolute right-4 justify-self-end md:hidden"
              onClick={() => setShowMenu((prev) => !prev)}
              initial={{ rotate: 0 }}
              animate={{
                rotate: showMenu ? 360 : 0,
              }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.span
                key={showMenu ? "close" : "menu"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="material-symbols-outlined !text-[48px]"
              >
                {showMenu ? "close" : "menu"}
              </motion.span>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {showMenu && (
              <motion.ul
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[64px] z-10 flex h-[100vh] w-full flex-col items-end gap-16 border-t border-black bg-light-brown p-6 text-h2 font-bold shadow-lg md:hidden"
              >
                {menuItems.map(({ link, label }, index) => (
                  <NavbarItem key={link} link={link}>
                    <motion.p
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 * (index + 1) }}
                      className="border-b border-black p-2 text-blue"
                      onClick={() => setShowMenu((prev) => !prev)}
                    >
                      {label}
                    </motion.p>
                  </NavbarItem>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </nav>
  );
}

function NavbarItem({
  children,
  link,
}: Readonly<{ children: React.ReactNode; link: string }>) {
  return (
    <li className="hover:text-white">
      <Link href={link}>{children}</Link>
    </li>
  );
}
