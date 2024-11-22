"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Redirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/cfp");
  }, []);
  return <div></div>;
}
