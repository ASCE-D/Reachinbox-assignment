"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LoginSignupPage: React.FC = () => {
  const handleGoogleSignUp = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-assignment-kohl.vercel.app/onebox/list";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-8">
      <div className="w-full">
        <Image
          src="/reachinbox-logo.svg"
          alt="REACHINBOX"
          width={150}
          height={30}
          className="mx-auto mb-16"
        />
      </div>
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white shadow-lg">
        <CardHeader>
          <h2 className="text-xl font-normal text-center">
            Create a new account
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full bg-transparent text-white border-zinc-700 hover:bg-zinc-800 font-normal flex items-center"
            onClick={handleGoogleSignUp}
          >
            <Image
              src="/google-icon.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign Up with Google
          </Button>
          <div className="flex justify-center">
            <Button className="w-[195px] h-[48px] p-[13px] px-[35px] gap-[10px] bg-gradient-to-r from-[#4B63DD] to-[#0524BF] rounded-[4px] text-white font-semibold text-[14px] leading-[22px]">
              Create an Account
            </Button>
          </div>
          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-zinc-400 hover:underline">
              Sign In
            </Link>
          </p>
        </CardContent>
      </Card>
      <footer className="w-full text-center text-zinc-600 text-xs mt-8">
        © 2023 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginSignupPage;
