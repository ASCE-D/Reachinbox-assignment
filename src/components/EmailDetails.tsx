import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, MoreHorizontal } from "lucide-react";

const EmailContent: React.FC = () => {
  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Orlando</h2>
        <div className="flex items-center">
          <Button variant="outline" className="mr-2">
            <span className="bg-yellow-400 w-2 h-2 rounded-full mr-2"></span>
            Meeting Completed <ChevronDown size={16} className="ml-2" />
          </Button>
          <Button variant="outline" className="mr-2">
            Move <ChevronDown size={16} className="ml-2" />
          </Button>
          <Button variant="ghost">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">New Product Launch</h3>
        <div className="text-sm text-gray-500 mb-2">
          from: jeanne@icloud.com cc: lennon.j@mail.com
        </div>
        <div className="text-sm text-gray-500 mb-4">to: lennon.j@mail.com</div>
        <div className="text-gray-700">
          Hi {"{"}FIRST_NAME{"}"},<br />
          <br />I would like to introduce you to SaaSgrow, a productized design
          service specifically tailored for saas startups. Our aim is to help
          you enhance the user experience and boost the visual appeal of your
          software products.
        </div>
      </div>
      <Button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-primary-foreground hover:bg-primary/90">
        Reply
      </Button>
    </div>
  );
};

const LeadDetails: React.FC = () => {
  return (
    <div className="w-64 bg-gray-50 p-4 overflow-y-auto">
      <h3 className="font-semibold mb-4">Lead Details</h3>
      <div className="space-y-4">
        <DetailItem label="Name" value="Orlando" />
        <DetailItem label="Contact No" value="+54-9062827869" />
        <DetailItem label="Email ID" value="orlando@gmail.com" />
        <DetailItem label="Linkedin" value="linkedin.com/in/timvadde/" />
        <DetailItem label="Company Name" value="Reachinbox" />
      </div>
      <h3 className="font-semibold mt-6 mb-4">Activities</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Campaign Name</h4>
        <div className="text-sm text-gray-600">3 Steps 5 Days in Sequence</div>
      </div>
      <div className="space-y-4">
        <ActivityItem step={1} type="Email" status="Sent" date="3rd, Feb" />
        <ActivityItem step={2} type="Email" status="Opened" date="5th, Feb" />
        <ActivityItem step={3} type="Email" status="Opened" date="5th, Feb" />
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div>
    <div className="text-sm text-gray-500">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const ActivityItem: React.FC<{
  step: number;
  type: string;
  status: string;
  date: string;
}> = ({ step, type, status, date }) => (
  <div className="flex items-center">
    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
      <Mail size={16} />
    </div>
    <div>
      <div className="font-semibold">
        Step {step}: {type}
      </div>
      <div className="text-sm text-gray-500">
        {status} {date}
      </div>
    </div>
  </div>
);

export { EmailContent, LeadDetails };
