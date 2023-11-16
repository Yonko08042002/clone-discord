import { cn } from "@/lib/utils";
import { useParams } from "@/router";
import {
  Calendar,
  ChevronDown,
  Home,
  Frame,
  Users,
  Plus,
  Mic,
  Headphones,
  Settings,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const MANAGERCHANNELS = [
  {
    id: 1,
    name: "Event",
    icon: Calendar,
  },
  {
    id: 2,
    name: "Browse Channel",
    icon: Frame,
  },
  {
    id: 3,
    name: "Members",
    icon: Users,
  },
];

const CHANNELS = [
  {
    id: 1,
    name: "Class",
    groups: [
      {
        id: "1",
        name: "Group A",
      },
      {
        id: "2",
        name: "Group B",
      },
    ],
  },
  {
    id: 2,
    name: "Class 2",
    groups: [
      {
        id: "3",
        name: "Group A2",
      },
      {
        id: "4",
        name: "Group B2",
      },
    ],
  },
  {
    id: 3,
    name: "Class 2",
    groups: [
      {
        id: "5",
        name: "Group a2",
      },
      {
        id: "6",
        name: "Group b2",
      },
    ],
  },
  {
    id: 4,
    name: "Class 3",
    groups: [
      {
        id: "7",
        name: "Group a2",
      },
      {
        id: "8",
        name: "Group b2",
      },
    ],
  },
];

export default function Org() {
  const { groupID, orgID } = useParams("/orgs/:orgID/groups/:groupID");
  const navigate = useNavigate();

  const navigateToGroup = (id: string) => {
    navigate(`/orgs/${orgID}/groups/${id}`);
  };
  return (
    <div className="w-full flex">
      <div className="relative bg-primary-foreground/30 w-1/5 flex flex-col">
        <div className="h-14 border-b-2 border-black p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl">
            <Home className="w-4 h-4" />
            <h1 className="font-bold  ">Imgnai</h1>
          </div>
          <ChevronDown />
        </div>
        <div className="h-3/4 overflow-y-scroll p-0">
          <div className="text-l text-primary/40 m-2 ">
            {MANAGERCHANNELS.map((managerchannel) => (
              <div
                className="p-2 flex gap-1 items-center cursor-pointer hover:bg-primary-foreground/90"
                key={managerchannel.id}
              >
                <managerchannel.icon className="w-4 h-4" />
                <p>{managerchannel.name}</p>
              </div>
            ))}
          </div>
          <div className=" px-2 my-4 text-primary/60">
            <hr className=" h-2 border-primary/60"></hr>
            {CHANNELS.map((channel) => (
              <div key={channel.id} className="text-l">
                <div className="flex justify-between items-center pr-2">
                  <div className="flex items-center">
                    <ChevronDown className="w-4 h-4 " />
                    <h1 className="uppercase">{channel.name}</h1>
                  </div>
                  <Plus className="w-4 h-4" />
                </div>
                <div className="p-2 space-y-2">
                  {channel.groups.map((group) => (
                    <div
                      className={cn("px-2 py-2", {
                        "bg-primary-foreground/90 text-primary/80 cursor-pointe ":
                          group.id === groupID,
                      })}
                      key={group.id}
                      onClick={() => navigateToGroup(group.id)}
                    >
                      {group.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 p-2 flex justify-between w-full">
          <div className="flex gap-2  ">
            <img
              src="https://bom.so/Tkos14"
              width={44}
              className="rounded-full aspect-square object-cover"
            />
            <div>
              <p className="font-bold text-base">TinNguyen</p>
              <p className="text-sm">tin08042002</p>
            </div>
          </div>
          <div className="flex gap-2  items-center">
            <Mic className="cursor-pointer" />
            <Headphones className="cursor-pointer" />
            <Settings className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className=" w-5/6">
        <Outlet />
      </div>
    </div>
  );
}
