import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Home, Send, BarChart2, Image, Moon } from "lucide-react";
import EmailList from "./EmailList";
import { EmailContent, LeadDetails } from "./EmailDetails";

const OneboxLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="font-bold text-xl">M</div>
          <div className="ml-2 font-semibold">Onebox</div>
        </div>
        <nav className="p-4">
          <SidebarItem icon={<Home />} label="Home" />
          <SidebarItem icon={<Mail />} label="Inbox" active />
          <SidebarItem icon={<Send />} label="Sent" />
          <SidebarItem icon={<BarChart2 />} label="Analytics" />
          <SidebarItem icon={<Image />} label="Media" />
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Email list */}
        <EmailList />

        {/* Email content */}
        <EmailContent />

        {/* Lead details */}
        <LeadDetails />
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}> = ({ icon, label, active }) => (
  <div
    className={`flex items-center p-2 rounded-lg mb-2 ${
      active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </div>
);

export default OneboxLayout;
