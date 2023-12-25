import { Link } from "react-router-dom";

import notFound from "@/assets/f404.gif";
import logo from "../assets/discord-logo-black.png";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import NavbarRow from "@/components/NavbarRow";

export default function Component() {
  return (
    <div className="w-full h-full">
      <nav className="flex items-center justify-between  h-20 w-full mx-7">
        <div className="flex items-center justify-between w-full  max-w-7xl mx-auto text-white px-10">
          <div className="w-[8rem] flex justify-start">
            <Link to="/">
              <img className="" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block md:flex items-center gap-10 text-base font-medium text-black">
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
              <Button className="text-white bg-indigo-500 rounded-full hover:bg-indigo-500 hover:shadow-xl">
                Login
              </Button>
            </Link>
            <NavbarRow />
          </div>
        </div>
      </nav>
      <div className="mx-auto justify-center flex">
        <div className="flex flex-col h-[calc(100vh-10rem)] items-center max-w-6xl mt-12 text-white">
          <div className="flex items-center justify-between max-w-6xl text-black gap-10">
            <div className="w-1/2 flex-col flex space-y-4">
              <h1 className="text-6xl font-black text-indigo-500">
                WRONG TURN?
              </h1>
              <p className="mt-10">
                You look lost, stranger. You know what helps when you’re lost? A
                piping hot bowl of noodles. Take a seat, we’re frantically at
                work here cooking up something good. Oh, you need something to
                read? These might help you:
              </p>
              <div className="flex flex-col">
                <Link
                  to="https://discordstatus.com/"
                  className="text-blue-400 text-xl hover:text-blue-600"
                >
                  Status Page
                </Link>
                <Link
                  to="/"
                  className="text-blue-400 text-xl hover:text-blue-600"
                >
                  @Discord
                </Link>
                <Link
                  to="/servers"
                  className="text-blue-400 text-xl hover:text-blue-600"
                >
                  Discord Support
                </Link>
              </div>
            </div>
            <img src={notFound} alt="404" className="ml-6 h-72 w-72" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
