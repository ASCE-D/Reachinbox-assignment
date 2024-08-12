"use client";

import React from "react";
import { Home, Users, Mail, Send, List, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { resolvedTheme } = useTheme();

  const menuItems = [
    { icon: "/home.svg", label: "Home" },
    { icon: "/search.svg", label: "Contacts" },
    { icon: "/mail.svg", label: "Mail" },
    { icon: "/send.svg", label: "Sent" },
    { icon: "/list.svg", label: "Tasks" },
    { icon: "/inbox.svg", label: "Inbox" },
    { icon: "/chart.svg", label: "Chart" },
  ];

  return (
    <>
      <aside className=" w-20">
        {" "}
        <div className="flex flex-col justify-between items-center fixed h-screen bg-card px-3 py-5 border-r dark:border-border w-16 z-49">
          <div className="flex items-center flex-col gap-12">
            <div>
              {" "}
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "https://app.reachinbox.ai/assets/logo.svg"
                    : "/logo-white.svg"
                }
                alt="REACHINBOX"
                loading="lazy"
                width={32}
                height={32}
                className={`mx-auto mb-16 cursor-pointer bg-black ${
                  resolvedTheme !== "dark" && "rounded"
                }`}
              />
            </div>
            <div className="flex flex-col gap-8 text-2xl">
              {menuItems.map((menuItem, index) => (
                <Button
                  key={index}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-6 relative px-1 py-3 dark:text-foreground text-foreground/80 false"
                >
                  <Image
                    src={menuItem.icon}
                    alt={menuItem.label}
                    loading="lazy"
                    width={40}
                    height={40}
                    className="mx-auto mb-16 hover:bg-accent hover:text-accent-foreground hover:rounded"
                  />
                </Button>
              ))}
            </div>
          </div>
          <div className="p-2">
            <Button variant="ghost" className="w-full p-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="font-semibold text-sm">AS</span>
              </div>
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
