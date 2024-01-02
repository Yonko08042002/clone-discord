import { cn } from "@/lib/utils";
import { Link, useParams } from "@/router";
import { groupBy } from "lodash-es";
import {
  ChevronDown,
  Home,
  Frame,
  Users,
  Plus,
  Mic,
  Headphones,
  Signal,
  PhoneMissed,
  Radio,
  VideoOff,
  ScreenShare,
  Rocket,
  FileAudio2,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import SettingModel from "./_components/SettingModel";
import { Button } from "@/components/ui/button";
import EventModel from "./_components/EventModel";
import { useQuery } from "react-query";
import { getChannels } from "@/apis/channels";
// import { group } from "console";

export default function Component() {
  const { channelID } = useParams("/channels/:channelID");
  const navigate = useNavigate();

  const navigateToGroup = (id: string) => {
    navigate(`/channels/${channelID}/${id}`);
  };

  const { data } = useQuery(["channels"], () => getChannels(channelID));

  return (
    <div className="w-full flex">
      <div className="relative bg-primary-foreground/20 text-primary-foreground w-1/5 min-w-[18rem] max-w-[16rem] flex flex-col">
        <div className="h-14 border-b-2 border-primary-foreground/60 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl">
            <Home className="w-4 h-4" />
            <h1 className="font-bold  text-base">Imgnai</h1>
          </div>
          <ChevronDown />
        </div>
        <div className="h-3/4 overflow-y-scroll p-0">
          <div className="text-l text-primary-foreground/40 m-2 w-full">
            <EventModel />
            <button className="w-full p-2 flex gap-1 items-center hover:bg-primary-foreground/20 rounded-sm">
              <Frame className="w-4 h-4" />
              <p>Browse Channel</p>
            </button>
            <Link
              to="/channels/:channelID/member_safety"
              params={{ channelID }}
              className="w-full p-2 flex gap-1 items-center hover:bg-primary-foreground/20 rounded-sm"
            >
              <Users className="w-4 h-4" />
              <p>Members</p>
            </Link>
          </div>
          <div className=" px-2 my-4 text-primary-foreground/60">
            <hr className=" h-2 border-primary-foreground/60"></hr>
            {Object.entries(groupBy(channels, "category.name"))?.map(
              ([category, channels]) => (
                <div key={category} className="text-l">
                  <div className="flex justify-between items-center pr-2">
                    <div className="flex items-center">
                      <ChevronDown className="w-4 h-4 " />
                      <h1 className="uppercase text-base">{category}</h1>
                    </div>
                    <Plus className="w-4 h-4" />
                  </div>
                  <div className="p-2 space-y-2">
                    {channels.map((channel) => (
                      <div
                        className={cn("px-2 py-2", {
                          "bg-primary-foreground/20 text-primary-foreground/80 cursor-pointe rounded-sm ":
                            channel.id === channelID,
                        })}
                        key={channel.id}
                        onClick={() => navigateToGroup(channel.id)}
                      >
                        {channel.name}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="absolute bottom-0 py-1 px-4 flex flex-col w-full bg-primary-foreground/10">
          <div className="flex justify-between w-full">
            <div className="flex justify-between w-full pb-1">
              <div className="">
                <div className="flex gap-x-1 items-center">
                  <Signal color="#00d13f" />
                  <p className="font-bold text-sm text-green-500 cursor-pointer hover:underline">
                    Đã kết nối giọng nói
                  </p>
                </div>
                <p className="text-xs text-primary-foreground/70 ">
                  Phong chờ/..............
                </p>
              </div>

              <div className="flex gap-2  items-center">
                <Radio className="cursor-pointer h-5 w-5" />
                <PhoneMissed className="cursor-pointer h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex pb-1 justify-between">
            <Button className="h-8 bg-gray-500 hover:bg-gray-500/60 rounded-sm">
              <VideoOff color="#ffffff" className="cursor-pointer h-5 w-5" />
            </Button>
            <Button className="h-8 bg-gray-500 hover:bg-gray-500/60 rounded-sm">
              <ScreenShare color="#ffffff" className="cursor-pointer h-5 w-5" />
            </Button>
            <Button className="h-8 bg-gray-500 hover:bg-gray-500/60 rounded-sm">
              <Rocket color="#ffffff" className="cursor-pointer h-5 w-5" />
            </Button>
            <Button className="h-8 bg-gray-500 hover:bg-gray-500/60 rounded-sm">
              <FileAudio2 color="#ffffff" className="cursor-pointer h-5 w-5" />
            </Button>
          </div>
          <hr className=" h-2 w-full border-primary-foreground/20"></hr>
          <div className="flex justify-between w-full">
            <div className="flex gap-2  items-center">
              <img
                src="https://bom.so/Tkos14"
                className="aspect-square w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-xs">Tin Nguyen</p>
                <p className="text-xs">tin08042002</p>
              </div>
            </div>
            <div className="flex gap-2  items-center">
              <Mic className="cursor-pointer h-5 w-5" />
              <Headphones className="cursor-pointer h-5 w-5" />
              <SettingModel />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-5/6">
        <Outlet />
      </div>
    </div>
  );
}
