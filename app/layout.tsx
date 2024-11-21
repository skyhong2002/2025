import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./cfp/globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NPVBCDZ" />
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
