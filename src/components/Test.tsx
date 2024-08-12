"use client"

import React from "react";
import { ChevronDown, Sun, Moon } from "lucide-react";
import Sidebar from "./Sidebar";
import EmailClientMain from "./EmailClientMain";
import { useTheme } from "next-themes";

// Placeholder component for workspace selector
const WorkspaceSelector = () => (
  <div className="flex items-center justify-center cursor-pointer text-[#343A40] dark:text-white">
    <span>Tim's Workspace</span>
    <ChevronDown size={16} className="ml-2" />
  </div>
);

// Dark mode toggle component
const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="flex items-center border border-[#E9EAEC] dark:border-[#343A40] bg-[#DADEE1] dark:bg-[#222426] rounded-full p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <>
          <div className="w-4 h-4 bg-[#888686] rounded-full"></div>
          <Sun size={16} className="text-[#E8C364] ml-2" />
        </>
      ) : (
        <>
          <Moon size={16} className="text-[#E8C364] mr-2" />
          <div className="w-4 h-4 bg-white  rounded-full"></div>
        </>
      )}
    </div>
  );
};

const EmailClient = () => {
  return (
    <div className="flex h-screen bg-primary text-[#5B5F66] dark:text-white">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content area */}
      <div className="ml-[9px] flex flex-col">
        <header className="top-0 w-full flex h-[68px] items-center justify-between border-b border-[#E0E0E0] dark:border-[#343A40] bg-white dark:bg-card px-8">
          <h3 className="text-xl font-semibold">Onebox</h3>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <WorkspaceSelector />
          </div>
        </header>
        <main className="flex-grow overflow-hidden bg-primary">
          <EmailClientMain />
        </main>
      </div>
    </div>
  );
};

export default EmailClient;
