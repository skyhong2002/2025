"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/cfp/");
  }, []);
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://sitcon.org/2025/" />
      </Head>
    </div>
  );
}
