"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ChevronDown,
  Search,
  Send,
  RotateCw,
  MoreHorizontal,
  Flag,
  Pencil,
  UserMinus,
  Clock,
  Trash,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReplyModal from "./ReplyModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MeetingCompletedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <circle cx="10" cy="10" r="10" fill="#444234" />
    <rect x="4" y="4" width="12" height="12" rx="6" fill="#E6D162" />
  </svg>
);

const MarkAsUnreadIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 items-center justify-center"
  >
    <path
      d="M16.6641 6.3335H8.33073V8.00016H16.6641V18.0002H3.33073V8.00016H4.9974V11.3335H6.66406V4.66683H11.6641V1.3335H4.9974V6.3335H3.33073C2.41406 6.3335 1.66406 7.0835 1.66406 8.00016V18.0002C1.66406 18.9168 2.41406 19.6668 3.33073 19.6668H16.6641C17.5807 19.6668 18.3307 18.9168 18.3307 18.0002V8.00016C18.3307 7.0835 17.5807 6.3335 16.6641 6.3335Z"
      fill="currentColor"
    />
  </svg>
);

const mails = [
  {
    email: "Beata@gmail.com",
    message: "I've tried a lot and .",
    status: "Interested",
    campaign: "Campaign Name",
    date: "Mar 7",
  },
  {
    email: "Sanya@gmail.com",
    status: "Closed",
    campaign: "Campaign Name",
    date: "Mar 7",
    message: "I've tried a lot and .",
  },
  {
    email: "william@gmail.com",
    status: "Interested",
    campaign: "Campaign Name",
    message: "Payment not going through",
    date: "Mar 7",
  },
  {
    email: "johnson@gmail.com",
    status: "Meeting Booked",
    campaign: "Campaign Name",
    date: "Mar 7",
    message: "Could you tell me more about it",
  },
  {
    email: "orlando@gmail.com",
    status: "Meeting Completed",
    campaign: "Campaign Name",
    date: "18:30",
    message: "Hi, I am interested",
  },
];

const EmailContent = () => (
  <div className="flex-1 text-white px-4 py-1 ">
    <div className="flex items-center mb-2">
      <div className="border-t-2 border-[#77777]  flex-grow"></div>
      <div className="border border-[#EEF1F4] dark:border-[#141517] text-[#637381] dark:text-white text-sm px-3 py-1 rounded-md">
        Today
      </div>
      <div className="border-t-2 border-[#77777]  flex-grow"></div>
    </div>

    <div className="bg-[#141517] rounded-lg p-4 mb-4 h-60">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-md font-semibold text-[#F8FAFC]">
          New Product Launch
        </h3>
        <span className="text-sm text-[#AEAEAE]">20 June 2022 · 9:16AM</span>
      </div>
      <p className="text-sm text-[#AEAEAE] mb-4">
        from : jeanne@icloud.com cc : lennon.j@mail.com
        <br />
        to : lennon.j@mail.com
      </p>
      <p className="text-sm mb-2 text-[#E1E0E0]">Hi {"{FIRST_NAME}"},</p>
      <p className="text-sm mb-4 text-[#E1E0E0] py-6 pr-56">
        I would like to introduce you to SaaSgrow, a productized design service
        specifically tailored for saas startups. Our aim is to help you enhance
        the user experience and boost the visual appeal of your software
        products.
      </p>
    </div>

    <div className="flex items-center mb-4">
      <div className="border-t-2 border-[#77777] flex-grow"></div>
      <Button
        variant="ghost"
        size="sm"
        className="border border-[#EEF1F4] dark:border-[#141517] text-[#637381] dark:text-white py-2 flex items-center justify-center h-8"
      >
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="17.6"
            height="16"
            transform="translate(0.760254)"
            fill="#171819"
          />
          <path d="M14.3603 12.8H4.76025V14H14.3603V12.8Z" fill="#AEAEAE" />
          <path d="M14.3603 2H4.76025V3.2H14.3603V2Z" fill="#AEAEAE" />
          <path
            d="M8.00625 8.954L7.16025 9.8L9.56025 12.2L11.9603 9.8L11.1143 8.954L10.1603 9.902V6.098L11.1143 7.046L11.9603 6.2L9.56025 3.8L7.16025 6.2L8.00625 7.046L8.96025 6.098V9.902L8.00625 8.954Z"
            fill="#AEAEAE"
          />
        </svg>
        View all replies
      </Button>
      <div className="border-t-2 border-[#77777] flex-grow"></div>
    </div>
  </div>
);

const LeadDetails = () => (
  <div className="bg-background text-foreground mt-2">
    <div
      className={cn(
        "flex items-center p-2 gap-4 w-full h-9 bg-[#23272C] rounded-xl mb-8"
      )}
    >
      <div className={cn("flex px-3 items-center w-full h-full")}>
        <span
          className={cn(
            "text-white font-inter font-semibold text-md leading-5"
          )}
        >
          Lead Details
        </span>
      </div>
    </div>
    <div className="px-4 space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-sm text-muted-foreground">Name</span>
        <span className="text-sm">Orlando</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className=" text-muted-foreground">Contact No</span>
        <span className=" ">+54-9062827869</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-sm text-muted-foreground">Email ID</span>
        <span className="text-sm">orlando@gmail.com</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-sm text-muted-foreground">LinkedIn</span>
        <p className="text-sm">
          linkedin.com/in/ <br />
          timvadde/
        </p>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-sm text-muted-foreground">Company Name</span>
        <span className="text-sm">Reachinbox</span>
      </div>
    </div>
  </div>
);

const Activities = () => (
  <div className=" text-white  rounded-lg overflow-hidden mt-4">
    <div className="flex items-center p-4 gap-4 w-full h-9 bg-[#23272C] rounded-xl mb-8">
      <span className="text-white font-inter font-semibold text-md leading-5">
        Activities
      </span>
    </div>
    <div className="px-4 pb-4">
      <h4 className="font-semibold text-lg mb-1">Campaign Name</h4>
      <div className="flex text-xs text-white mb-6">
        <span>3 Steps</span>
        <span className="mx-2">|</span>
        <span>5 Days in Sequence</span>
      </div>
      <div className="space-y-6 relative">
        <div className="absolute left-[13px] top-[24px] bottom-0 w-[1px] bg-[#41464B]"></div>
        {[
          { step: 1, status: "Sent", date: "3rd, Feb", icon: Send },
          { step: 2, status: "Opened", date: "5th, Feb", icon: Mail },
          { step: 3, status: "Opened", date: "5th, Feb", icon: Mail },
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="rounded-full bg-[#41464B] p-1.5 mr-4 z-10">
              <Mail className="w-4 h-4 text-gray-300" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">
                Step {item.step}: Email
              </p>
              <p className="text-xs text-gray-400 flex items-center">
                {item.status === "Sent" ? (
                  <Send className="w-3 h-3 mr-2" />
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M15.4336 6.96086C15.4336 6.48086 15.1869 6.06086 14.8069 5.82752L8.7736 2.29419L2.74027 5.82752C2.36027 6.06086 2.10693 6.48086 2.10693 6.96086V13.6275C2.10693 14.3609 2.70693 14.9609 3.44027 14.9609H14.1069C14.8403 14.9609 15.4403 14.3609 15.4403 13.6275L15.4336 6.96086ZM14.1003 6.96086V6.96752L8.7736 10.2942L3.44027 6.96086L8.7736 3.84086L14.1003 6.96086ZM3.44027 13.6275V8.52086L8.7736 11.8675L14.1003 8.54086L14.1069 13.6275H3.44027Z"
                      fill="#ECBF21"
                    />
                  </svg>
                )}
                <span>
                  {item.status} {item.date}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EmailClientMain = () => {
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteClick = (e: any) => {
    e.preventDefault();
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Implement delete logic here
    console.log("Email deleted");
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="flex-1 flex bg-white dark:bg-primary">
      <div className="w-[32 0px] border-r  dark:text-white">
        <div className=" text-white px-4 py-2">
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-[#4285F4] ml-2">
                  All Inbox(s)
                </h3>
                <ChevronDown className="h-4 w-4 ml-1 text-[#4285F4]" />
              </div>
              <Button variant="ghost" size="icon" className="p-0">
                <div className="p-1.5 border border-[#DFE3E8] dark:border-[#2C2F38] rounded">
                  <RotateCw className="h-3.5 w-3.5 text-black dark:text-white" />
                </div>
              </Button>
            </div>
            <div className="text-xs mt-1 ml-2">
              <span className="text-black dark:text-white font-bold">
                25/25
              </span>{" "}
              <span className="text-muted-foreground">Inboxes selected</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-4 ml-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#F4F6F8] dark:bg-[#1A1C23] border  text-white pl-8 pr-2 py-1.5 rounded text-sm"
            />
          </div>

          {/* New Replies and Sort */}
          <div className="flex justify-between items-center mb-2 text-sm">
            <div className="flex items-center">
              <div className="bg-[#ECECEC] dark:bg-[#222426] text-[#5C7CFA] rounded-[12px] px-2 py-1 mr-2 text-sm">
                26
              </div>
              <span className="text-[#172B4D] dark:text-white font-medium">
                New Replies
              </span>
            </div>
            <div className="flex items-center text-[#172B4D] font-medium dark:text-white">
              <span>Newest</span>
              <ChevronDown className="h-4 w-4 ml-6" />
            </div>
          </div>
          <div className="dark:border-b border-gray-800"></div>

          {/* Email list */}
          <div className="space-y-0">
            {mails.map((item, index) => (
              <div
                key={index}
                className={`py-3 pl-2 ${
                  index === 4
                    ? "border-l-4 border-[#5c7cfa] dark:border-y border-y-[#1f2937] bg-[#F4FAFF] dark:bg-black"
                    : index !== 0
                    ? "dark:border-t border-t-[#1f2937]"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#343A40] dark:text-white font-sm">
                    {item.email}
                  </span>
                  <span className="text-gray-500 text-xs mx-2">
                    {item.date}
                  </span>
                </div>
                {item.message && (
                  <div className="text-xs text-[#172B4D] dark:text-[#E1E0E0] my-1">
                    {item.message}
                  </div>
                )}
                <div className="flex items-center text-xs mt-1">
                  <div
                    className={` flex items-center rounded-full px-2 py-0.5 mr-2 bg-[#F0F0F0] dark:bg-[#222426] `}
                    style={{ color: getStatusColor(item.status) }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="6"
                        fill={getStatusColor(item.status)}
                        style={{ opacity: 0.3 }}
                      />
                      <rect
                        x="2"
                        y="2"
                        width="8"
                        height="8"
                        rx="4"
                        fill={`${getStatusColor(item.status)}`}
                      />
                    </svg>

                    {item.status}
                  </div>
                  <div
                    className={` flex items-center rounded-full px-2 py-0.5 mr-2 bg-[#F0F0F0] dark:bg-[#222426] `}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex mr-1"
                    >
                      <path
                        d="M7.15581 12C7.37488 12 7.56185 11.9169 7.71671 11.7507C7.87158 11.5883 8.00189 11.3711 8.10765 11.0991L11.8414 1.32578C11.8905 1.19736 11.9282 1.07838 11.9547 0.968839C11.9811 0.859301 11.9943 0.75543 11.9943 0.657224C11.9943 0.457035 11.9358 0.298395 11.8187 0.181303C11.7016 0.0604344 11.543 0 11.3428 0C11.2483 0 11.1445 0.0151086 11.0312 0.0453258C10.9178 0.0717658 10.797 0.107649 10.6686 0.152975L0.86119 3.90935C0.615675 4.00378 0.409821 4.12842 0.243626 4.28329C0.0812087 4.43815 0 4.62512 0 4.84419C0 5.11237 0.0906515 5.31067 0.271955 5.43909C0.453258 5.56374 0.681775 5.66761 0.957507 5.75071L3.89802 6.65156C4.09443 6.71199 4.25873 6.73654 4.39093 6.72521C4.52313 6.7101 4.65911 6.63834 4.79887 6.50991L11.1048 0.662889C11.1426 0.628895 11.1822 0.611898 11.2238 0.611898C11.2691 0.611898 11.3088 0.627007 11.3428 0.657224C11.373 0.687441 11.3881 0.725212 11.3881 0.770538C11.3881 0.812087 11.3692 0.851747 11.3314 0.889518L5.50708 7.21246C5.38621 7.34089 5.31634 7.47309 5.29745 7.60907C5.28234 7.74504 5.30312 7.91313 5.35977 8.11331L6.23229 10.9915C6.31917 11.2823 6.42682 11.5222 6.55524 11.711C6.68366 11.9037 6.88385 12 7.15581 12Z"
                        fill="#AEAEAE"
                      />
                    </svg>

                    <span className="text-[#637381] dark:text-white">
                      {item.campaign}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email content */}
      <div className="flex-1 border-r border-border">
        {/* White Background Section */}
        <div className="bg-white dark:bg-black px-4 py-2">
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-lg font-semibold">Orlando</h2>
              <p className="text-sm text-gray-400">orlando@gmail.com</p>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="border dark:bg-[#1F1F1F] dark:text-white px-3 flex items-center rounded-lg"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill={getStatusColor("Meeting Completed")}
                    style={{ opacity: 0.3 }}
                  />
                  <rect
                    x="2"
                    y="2"
                    width="8"
                    height="8"
                    rx="4"
                    fill={getStatusColor("Meeting Completed")}
                  />
                </svg>
                Meeting Completed
                <ChevronDown className="ml-4 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="border dark:bg-[#1F1F1F] dark:text-white px-3 flex items-center rounded-lg"
              >
                Move
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border dark:bg-[#1F1F1F] dark:text-white px-3 flex items-center rounded-lg"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-[#1F1F1F] text-white border-[#343A40] rounded-[0.5rem]">
                  <DropdownMenuItem className="focus:bg-[#2F2F2F] focus:text-white flex">
                    <MarkAsUnreadIcon />
                    <span className="ml-2 items-center justify-center">
                      Mark as unread
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-[#2F2F2F] focus:text-white">
                    <Pencil className="h-4 w-4" />
                    <span className="ml-2">Edit lead</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-[#2F2F2F] focus:text-white">
                    <UserMinus className="h-4 w-4" />
                    <span className="ml-2">Remove lead</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-[#2F2F2F] focus:text-white">
                    <Clock className="h-4 w-4" />
                    <span className="ml-2">Set reminder</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="focus:bg-[#2F2F2F] focus:text-white"
                    onSelect={handleDeleteClick}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="ml-2">Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Primary Foreground Background Section */}
        <div className="bg-primary-foreground dark:bg-black px-4">
          <AlertDialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <AlertDialogContent className="bg-gradient-to-b from-[#141517] to-[#232528] text-white border-[#343A40] p-6 w-[443px] h-[249px] max-w-[443px] max-h-[249px] flex flex-col justify-between items-center">
              <AlertDialogHeader className="w-full flex justify-center items-center">
                <AlertDialogTitle className="text-2xl font-bold text-center">
                  Are you sure?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <div className="text-gray-400 text-center">
                Your selected email will be deleted.
              </div>
              <AlertDialogFooter className="w-full">
                <div className="flex justify-center space-x-4 w-full">
                  <AlertDialogCancel className="bg-[#2F2F2F] text-white hover:bg-[#3F3F3F] px-4 py-2 rounded">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteConfirm}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Delete
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="border-t border-border -mx-4"></div>
          <EmailContent />
          <Button
            variant={"ghost"}
            size={"lg"}
            className=" mt-28 ml-8 bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white hover:bg-primary/90"
            onClick={() => setIsReplyModalOpen(true)}
          >
            <div className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" flex items-center"
              >
                <path
                  d="M10 8.5V4.5L3 11.5L10 18.5V14.4C15 14.4 18.5 16 21 19.5C20 14.5 17 9.5 10 8.5Z"
                  fill="#F7F7F7"
                />
              </svg>
              <span className="mx-2">Reply</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Lead details and activities */}
      <div className="w-[278px] p-2 bg-background">
        <LeadDetails />
        <Activities />
      </div>
      {isReplyModalOpen && (
        <ReplyModal onClose={() => setIsReplyModalOpen(false)} />
      )}
    </div>
  );
};

export default EmailClientMain;

function getStatusColor(status: any) {
  switch (status) {
    case "Interested":
      return "#46C18D";
    case "Closed":
      return "#626FE6";
    case "Meeting Booked":
      return "#9C62E6";
    case "Meeting Completed":
      return "#E6D162";
    default:
      return "bg-[#222426] text-gray-300";
  }
}
