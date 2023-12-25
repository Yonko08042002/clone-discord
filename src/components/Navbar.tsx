import { Button } from "./ui/button";
import logo from "../assets/discord-logo-white.png";
import { Link } from "react-router-dom";

import NavbarRow from "./NavbarRow";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  h-20 w-full mx-7">
      <div className="flex items-center justify-between w-full  max-w-7xl mx-auto text-white px-10">
        <div className="w-[8rem] flex justify-start">
          <Link to="/">
            <img className="" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block md:flex items-center gap-10 text-base font-medium">
          <Link to="/download" className="hover:underline">
            Download
          </Link>
          <Link to="/nitro" className="hover:underline">
            Nitro
          </Link>
          <Link to="/discover" className="hover:underline">
            Discover
          </Link>
          <Link to="/safety" className="hover:underline">
            Safety
          </Link>
          <Link to="/servers" className="hover:underline">
            Support
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
        </div>

        <div className="w-[8rem] flex justify-end">
          <Link to="/login">
            <Button className="text-black bg-white rounded-full hover:bg-white hover:shadow-xl">
              Login
            </Button>
          </Link>
          <NavbarRow />
        </div>
      </div>
    </nav>
  );
}
