import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

export default function EventModel() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <button className="w-full p-2 flex gap-1 items-center hover:bg-primary-foreground/20 rounded-sm">
          <Calendar className="w-4 h-4" />
          <p>Event</p>
        </button>
      </DialogTrigger>
      <DialogContent>hello</DialogContent>
    </Dialog>
  );
}
