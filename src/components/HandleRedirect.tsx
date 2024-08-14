"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const HandleRedirect: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      // Store the token securely
      localStorage.setItem("authToken", token);
      // Redirect to a dashboard or home page
      router.push("/onebox/list");
    }
  }, [router, searchParams]);

  return <div>Processing login...</div>;
};

export default HandleRedirect;
