import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between mt-2 h-20 w-full">
      <div className="flex items-center justify-between w-full gap-20 max-w-7xl mx-auto text-white">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-10 text-lg font-medium">
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
        <Link to="/login">
          <Button className="text-black bg-white rounded-full hover:bg-white hover:shadow-xl">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
