import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/discord-logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-20 px-0 lg:px-24 md:px-6">
      <div className=" md:flex md:gap-x-4 mb-6 ">
        <div className="pl-12 md:w-max lg:w-1/3 ">
          <p className="flex text-sm mb-3">
            Tieng Viet <ChevronDown />
          </p>
          <div className="flex gap-7 mt-6 mb-8">
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
        <div className=" flex flex-wrap px-12 gap-y-4 md:w-2/3 md:flex-wrap md:p-0 lg:flex-nowrap lg:gap-9  lg:w-2/3 lg:p-0">
          <div className="w-1/2 flex flex-col gap-y-2  ">
            <h5 className="text-indigo-600 mb-2">Product</h5>
            <a className="text-white block" href="">
              <span>Download</span>
            </a>
            <a className="text-white block" href="">
              <span>Nitro</span>
            </a>
            <a className="text-white block" href="">
              <span>Status</span>
            </a>
            <a className="text-white block" href="">
              <span>App Directory</span>
            </a>
            <a className="text-white block" href="">
              <span>New Mobile Experience</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2 ">
            <h5 className="text-indigo-600 mb-2">Company</h5>
            <a className="text-white block" href="">
              <span>About</span>
            </a>
            <a className="text-white block" href="">
              <span>Jobs</span>
            </a>
            <a className="text-white block" href="">
              <span>Brand</span>
            </a>
            <a className="text-white block" href="">
              <span>Newsroom</span>
            </a>
            <a className="text-white block" href="">
              <span>Fall Relaease</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            <h5 className="text-indigo-600 mb-2">Resources</h5>
            <a className="text-white block" href="">
              <span>College</span>
            </a>
            <a className="text-white block" href="">
              <span>Support</span>
            </a>
            <a className="text-white block" href="">
              <span>Safety</span>
            </a>
            <a className="text-white block" href="">
              <span>Blog</span>
            </a>
            <a className="text-white block" href="">
              <span>Feedback</span>
            </a>
            <a className="text-white block" href="">
              <span>Creator</span>
            </a>
            <a className="text-white block" href="">
              <span>Community</span>
            </a>
            <a className="text-white block" href="">
              <span>Developers</span>
            </a>
            <a className="text-white block" href="">
              <span>Gaming</span>
            </a>
            <a className="text-white block" href="">
              <span>Official 3rd Party Merch</span>
            </a>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            {" "}
            <h5 className="text-indigo-600 mb-2">Policies</h5>
            <a className="text-white block" href="">
              <span>Terms</span>
            </a>
            <a className="text-white block" href="">
              <span>Privacy</span>
            </a>
            <a className="text-white block" href="">
              <span>Cookie Settings</span>
            </a>
            <a className="text-white block" href="">
              <span>Guidelines</span>
            </a>
            <a className="text-white block" href="">
              <span>Acknowledgements </span>
            </a>
            <a className="text-white block" href="">
              <span>Licenses </span>
            </a>
            <a className="text-white block" href="">
              <span>Company Information</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 flex justify-between border-t-2 border-indigo-500 mx-12">
        <div className="w-[8rem] flex justify-start">
          <Link to="/">
            <img className="" src={logo} alt="logo" />
          </Link>
        </div>
        <Link to="/register">
          <Button className="text-white bg-[#5865f2] rounded-full hover:bg-[#5865f2] hover:shadow-xl ">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}
