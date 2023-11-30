import { Org } from "@/lib/type";
import { cn } from "@/lib/utils";
import { useParams } from "@/router";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrgSidebarProps {
  orgs: Org[];
}

export default function OrgSidebar({ orgs }: OrgSidebarProps) {
  const navigate = useNavigate();
  const { orgID } = useParams("/orgs/:orgID/groups/:groupID");
  return (
    <div className="p-2 space-y-4 w-20">
      <div className="items-center">
        <img
          className=" ml-1 cursor-pointer w-12 h-12  rounded-xl "
          src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ"
          alt="Tin nhắn trực tiếp"
        />
        <div className=" mt-3  border-b-4 w-14 rounded-lg "></div>
      </div>
      <div>
        {orgs.map((org) => (
          <div key={org.id} className="">
            <div
              key={org.id}
              className={cn({
                "fixed left-0 border-l-4 border-primary-foreground mt-1 py-6 rounded-r-lg":
                  org.id === orgID,
              })}
            ></div>
            <img
              onClick={() => navigate(`/orgs/${org.id}`)}
              src={org.icon}
              key={org.id}
              alt={org.name}
              className="w-14 h-14 rounded-sm p-1 mt-1 object-cover"
            />
          </div>
        ))}
      </div>
      <div className=" ml-1 cursor-pointer w-12 h-12 rounded-full bg-gray-600 text-green-500 items-center flex justify-center">
        <Plus />
      </div>
    </div>
  );
}
