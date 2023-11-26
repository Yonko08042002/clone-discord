import Avatar from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "@/types";
import InfoPopover from "./InfoPopover";

interface Props {
  member: User;
}

export default function PopoverMember({ member }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          key={member.id}
          className="flex items-center gap-4 hover:bg-primary/10 rounded-sm"
        >
          <Avatar src={member.avatar} alt={member.name} />
          <p className="text-green-600  text-l">{member.name}</p>
        </div>
      </PopoverTrigger>
      <PopoverContent side="left" className="w-96">
        <InfoPopover member={member} />
      </PopoverContent>
    </Popover>
  );
}
