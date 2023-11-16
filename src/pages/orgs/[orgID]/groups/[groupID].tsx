import ChatList from "@/pages/orgs/[orgID]/groups/_components/ChatList";
import MemberList from "@/pages/orgs/[orgID]/groups/_components/MemberList";
import { useParams } from "@/router";
import { Frame, HelpCircle } from "lucide-react";

export default function Group() {
  const { groupID } = useParams("/orgs/:orgID/groups/:groupID");
  return (
    <div className="">
      <header className="h-14 p-2 bg-primary/20 border-b border-primary/20 text-2xl flex items-center justify-between ">
        <div className="flex items-center">
          <Frame className="w-4 h-4" />
          {groupID}
        </div>
        <div className="flex">
          <HelpCircle />
        </div>
      </header>
      <div className="flex  h-[calc(100vh-3.5rem)]">
        <div className="w-3/4 bg-primary/20 px-3 overflow-y-scroll">
          <ChatList />
        </div>
        <div className="w-1/4 bg-primary/10 p-5">
          <MemberList />
        </div>
      </div>
    </div>
  );
}
