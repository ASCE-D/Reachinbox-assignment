"use client"

import LoginSignupPage from "@/components/login";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/google-login");

  return <h1></h1>;
}
