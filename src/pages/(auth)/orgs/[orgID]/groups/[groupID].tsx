import TooltipIcon from "@/components/TooltipIcon";

import { useParams } from "@/router";
import { Frame, HelpCircle, Users } from "lucide-react";
import { useState } from "react";
import Chatlist from "./_components/ChatList";
import MemberList from "./_components/MemberList";

export default function Group() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  const { groupID } = useParams("/orgs/:orgID/groups/:groupID");

  return (
    <div className="">
      <header className="h-14 p-2 bg-primary/20 border-b border-primary/20 text-2xl flex items-center justify-between ">
        <div className="flex items-center">
          <Frame className="w-4 h-4" />
          {groupID}
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
      <div className="flex  h-[calc(100vh-3.5rem)]">
        <div
          className={`${
            isHideMemberList ? "w-full" : "w-3/4"
          }  bg-primary/20 px-3 overflow-y-scroll`}
        >
          <Chatlist />
        </div>
        {isHideMemberList ? null : (
          <div className="w-1/4 bg-primary/10 p-5">
            <MemberList />
          </div>
        )}
      </div>
    </div>
  );
}
