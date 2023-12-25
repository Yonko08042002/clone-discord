import TooltipIcon from "@/components/TooltipIcon";
import { HelpCircle, Users } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  return (
    <div className="">
      {" "}
      <header className="h-14 p-2 bg-primary-foreground/30 border-b border-primary-foreground/20 text-2xl flex items-center justify-between text-primary-foreground">
        <div className="flex items-center">
          <Users className="w-6 h-6 mr-2" />
          Member
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
      <div className="p-6">
        <div className="bg-primary-foreground/20 rounded-sm w-full h-full">
          hello
        </div>
      </div>
    </div>
  );
}
