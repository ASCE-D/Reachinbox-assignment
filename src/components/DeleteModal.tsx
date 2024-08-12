import React, { useState } from "react";
import { MoreHorizontal, Pencil, UserMinus, Clock, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
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

const MarkAsUnreadIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
  >
    <path
      d="M16.6641 6.3335H8.33073V8.00016H16.6641V18.0002H3.33073V8.00016H4.9974V11.3335H6.66406V4.66683H11.6641V1.3335H4.9974V6.3335H3.33073C2.41406 6.3335 1.66406 7.0835 1.66406 8.00016V18.0002C1.66406 18.9168 2.41406 19.6668 3.33073 19.6668H16.6641C17.5807 19.6668 18.3307 18.9168 18.3307 18.0002V8.00016C18.3307 7.0835 17.5807 6.3335 16.6641 6.3335Z"
      fill="currentColor"
    />
  </svg>
);

const CustomDropdownMenu = () => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="bg-[#1F1F1F] text-white rounded-xl hover:bg-[#2F2F2F]"
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#1F1F1F] text-white border-[#343A40] rounded-xl">
          <DropdownMenuItem className="focus:bg-[#2F2F2F] focus:text-white">
            <MarkAsUnreadIcon />
            <span className="ml-2">Mark as unread</span>
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
            onSelect={handleDelete}
          >
            <Trash className="h-4 w-4" />
            <span className="ml-2">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="bg-[#1F1F1F] text-white border-[#343A40]">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Your selected email will be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-[#2F2F2F] text-white hover:bg-[#3F3F3F]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CustomDropdownMenu;
