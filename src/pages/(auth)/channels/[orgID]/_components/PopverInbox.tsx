import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Inbox } from "lucide-react";
export default function PopverInbox() {
  return (
    <Popover>
      <PopoverTrigger className="[&_svg]:data-[state=open]:text-white">
        <Inbox className="cursor-pointer text-gray-300 hover:text-white" />
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-96">
        <div>hello</div>
      </PopoverContent>
    </Popover>
  );
}
