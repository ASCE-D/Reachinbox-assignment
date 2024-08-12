import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

export function Dashboard() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <Sidebar />
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <div className="hidden lg:flex items-center fixed h-20 w-full justify-between bg-secondary p-5 border-b pl-[114px] pr-[35px]">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold font-base"></h1>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex w-full">
                <button
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-card hover:bg-accent hover:text-accent-foreground h-10 py-2 w-[250px] px-3 justify-start"
                  role="combobox"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:r1:"
                  data-state="closed"
                >
                  <div className="flex w-full justify-between items-center">
                    <p className="truncate pr-2">My Workspace</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}
