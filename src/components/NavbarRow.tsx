import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/discord-logo-black.png";
export default function NavbarRow() {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <Button className="md:hidden bg-transparent hover:bg-transparent">
          <AlignJustify size={30} color="#ffffff" strokeWidth={3} />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden  text-black max-w-full h-screen p-0">
        <div className="  bg-white rounded-l-sm p-6 ">
          <div className="w-[8rem] flex justify-start ">
            <Link to="/">
              <img className="" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="h-[1px] bg-gray-300  mt-10 mb-5 mr-8"></div>
          <nav className="mr-8">
            <div className="text-blue-400 bg-gray-100/50 p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Home
              </Link>
            </div>
            <div className="p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Download
              </Link>
            </div>
            <div className="p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Nitro
              </Link>
            </div>
            <div className="  p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Discover
              </Link>
            </div>
            <div className=" flex p-2 rounded-sm gap-1">
              <Link className="hover:underline " to="/">
                Safety
              </Link>
              <ChevronRight className=" my-auto" />
            </div>
            <div className=" p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Support
              </Link>
            </div>
            <div className=" p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Blog
              </Link>
            </div>
            <div className=" p-2 rounded-sm">
              <Link className="hover:underline " to="/">
                Careers
              </Link>
            </div>
          </nav>
          <Button className="flex mt-40 gap-4 w-full text-base text-white  border-[#5865f2] rounded-full hover:shadow-xl">
            <span>
              <Download />
            </span>
            Download for Windows
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
