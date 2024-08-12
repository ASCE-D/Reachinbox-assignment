import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, RefreshCcw } from "lucide-react";

const EmailList: React.FC = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold text-blue-600 flex items-center">
            All Inbox(s) <ChevronDown className="ml-1" size={16} />
          </div>
          <RefreshCcw size={16} className="text-gray-400" />
        </div>
        <div className="text-sm text-gray-500 mb-4">25/25 Inboxes selected</div>
        <Input type="text" placeholder="Search" className="w-full" />
      </div>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-blue-600 font-semibold mr-2">26</span>
          <span className="font-semibold">New Replies</span>
        </div>
        <Button variant="ghost" className="text-sm">
          Newest <ChevronDown size={16} />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Email list items would go here */}
        <EmailListItem
          email="Beata@gmail.com"
          subject="I've tried a lot and..."
          date="Mar 7"
          tags={["Interested"]}
          campaign="Campaign Name"
        />
        {/* More EmailListItems... */}
      </div>
    </div>
  );
};

const EmailListItem: React.FC<{
  email: string;
  subject: string;
  date: string;
  tags: string[];
  campaign: string;
}> = ({ email, subject, date, tags, campaign }) => (
  <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
    <div className="flex justify-between mb-1">
      <span className="font-semibold">{email}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <div className="text-sm text-gray-600 mb-2">{subject}</div>
    <div className="flex items-center">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2"
        >
          {tag}
        </span>
      ))}
      <span className="text-xs text-gray-500">{campaign}</span>
    </div>
  </div>
);

export default EmailList;
