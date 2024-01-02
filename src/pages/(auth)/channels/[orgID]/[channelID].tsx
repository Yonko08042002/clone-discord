import TooltipIcon from "@/components/TooltipIcon";

import { useParams } from "@/router";
import { Frame, HelpCircle, Users } from "lucide-react";
import { useState } from "react";
import Chatlist from "./_components/ChatList";
import MemberList from "./_components/MemberList";

export default function Channel() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  const { channelID } = useParams("/channels/:channelID");

  return (
    <div className="">
      <header className="h-14 p-2 bg-primary-foreground/30 border-b border-primary-foreground/20 text-2xl flex items-center justify-between text-primary-foreground">
        <div className="flex items-center">
          <Frame className="w-4 h-4" />
          {channelID}
        </div>
        <div className="flex gap-x-2 mx-3">
          <TooltipIcon
            icon={
              <Users
                onClick={() => setIsHideMemberList(!isHideMemberList)}
                className="cursor-pointer"
              />
            }
            content={isHideMemberList ? "Show Member List" : "Hide Member List"}
          ></TooltipIcon>
          <HelpCircle className="cursor-pointer" />
        </div>
      </header>
      <div className="flex  h-[calc(100vh-3.5rem)] ">
        <div
          className={`${
            isHideMemberList ? "w-full" : "w-3/4"
          }  bg-primary-foreground/30 px-3 `}
        >
          <Chatlist />
        </div>
        {isHideMemberList ? null : (
          <div className="w-1/4 bg-primary-foreground/20 text-primary-foreground p-5  ">
            <MemberList />
          </div>
        )}
      </div>
    </div>
  );
}
