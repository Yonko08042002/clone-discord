import { HelpCircle, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useLocation } from "react-router-dom";
import { Link, useParams } from "@/router";

const MEMBERS = [
  {
    id: "001",
    displayname: "johny",
    username: "Jone_Terry",
    avatar:
      "https://th.bing.com/th/id/OIP.-HoDebcd1MseGnmiTJALDAHaEo?rs=1&pid=ImgDetMain",
    memberSine: "2023-01-01",
    joinedDiscord: "2023-01-01",
    joinMethod: "Discord",
    roles: ["Admin"],
  },
];

export default function Component() {
  const { orgID } = useParams("/channels/:orgID/member_safety");
  const location = useLocation();
  // console.log(location);

  return (
    <div className="">
      {" "}
      <header className="h-14 p-2 bg-zinc-700 border-b border-primary-foreground/20 text-2xl flex items-center justify-between text-primary-foreground">
        <div className="flex items-center">
          <Users className="w-6 h-6 mr-2" />
          Member
        </div>
        <div className="flex gap-x-2 mx-3">
          {location.state?.channel && (
            <Link
              to="/channels/:orgID/:channelID"
              params={{ orgID: orgID, channelID: location.state.channel.id }}
              className="text-xs border border-gray-300 p-2"
            >
              Return to {location.state.channel.name}
            </Link>
          )}

          <HelpCircle className="cursor-pointer" />
        </div>
      </header>
      <div className="p-6">
        <div className="bg-zinc-700 text-white rounded-sm w-full h-full">
          <div className="p-4 border-b border-gray-100">
            <h1>Recent Members</h1>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="space-x-2 ">
                  {" "}
                  <Checkbox />
                  <span>Name</span>
                </TableHead>
                <TableHead>Member Since</TableHead>
                <TableHead>JOINED discord</TableHead>
                <TableHead>Join Method</TableHead>
                <TableHead>Roiles</TableHead>
                <TableHead>SINALS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MEMBERS.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="flex gap-2 items-center">
                    <Checkbox />
                    <div className="flex gap-2  items-center">
                      <img
                        src={member.avatar}
                        className="aspect-square w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-xs">{member.username}</p>
                        <p className="text-xs text-green-500">
                          {member.displayname}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.memberSine}</TableCell>
                  <TableCell>{member.joinedDiscord}</TableCell>
                  <TableCell>{member.joinMethod}</TableCell>
                  <TableCell>{member.roles.map((role) => role)}</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex gap-1">
                    <button>View</button>
                    <button>Edit</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
