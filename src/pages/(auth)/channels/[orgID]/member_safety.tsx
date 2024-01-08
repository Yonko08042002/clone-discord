import TooltipIcon from "@/components/TooltipIcon";
import { HelpCircle, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function Component() {
  const [isHideMemberList, setIsHideMemberList] = useState(false);
  return (
    <div className="">
      {" "}
      <header className="h-14 p-2 bg-zinc-700 border-b border-primary-foreground/20 text-2xl flex items-center justify-between text-primary-foreground">
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
        <div className="bg-zinc-700 text-white rounded-sm w-full h-full">
          <div className="p-4">
            <h1>Recent Members</h1>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
