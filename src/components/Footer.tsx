import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="px-12">
        <p className="flex text-sm mb-3">
          Viet Nam <ChevronDown />
        </p>
        <div className="flex gap-7 mt-6">
          <Button className="bg-transparent hover:bg-transparent p-0">
            <Twitter size={22} color="#ffffff" strokeWidth={2.75} />
          </Button>
          <Button className="bg-transparent hover:bg-transparent p-0">
            <Instagram size={22} color="#ffffff" strokeWidth={2.75} />
          </Button>
          <Button className="bg-transparent hover:bg-transparent p-0">
            <Facebook size={22} color="#ffffff" strokeWidth={2.75} />
          </Button>
          <Button className="bg-transparent hover:bg-transparent p-0">
            <Youtube size={22} color="#ffffff" strokeWidth={2.75} />
          </Button>
        </div>
      </div>
      <div className=" flex flex-wrap md:flex-nowrap px-12 gap-y-4">
        <div className="w-1/2">1</div>
        <div className="w-1/2">2</div>
        <div className="w-1/2">3</div>
        <div className="w-1/2">4</div>
      </div>
      <div></div>
    </div>
  );
}
