import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionInView from "@/components/SectionInView";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
export default function Component() {
  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-col mx-auto items-center  bg-no-repeat bg-cover text-white h-[38rem] bg-discover-bgr">
        <Navbar />
        <div className="flex flex-col items-center justify-center max-w-[800px] mt-20">
          <h1 className="text-6xl font-bold font-"> IMAGINE A PLACE...</h1>
          <p className="mt-10 text-xl text-center">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="flex gap-6 mt-10">
          <Button className="flex h-16 gap-4 px-6 text-xl text-black bg-white rounded-full hover:bg-white hover:text-primary hover:shadow-xl">
            <span>
              <Download />
            </span>
            Download for Windows
          </Button>
          <Button className="h-16 px-6 text-xl bg-black rounded-full hover:bg-black hover:shadow-xl">
            Open Discord in your browser
          </Button>
        </div>
      </div>
      <div className=" w-full h-[34rem] text-black bg-white item pt-8">
        <SectionInView className="flex  max-w-5xl gap-10 mx-auto justify-center">
          <img
            src="/src/assets/bg-group-1.png"
            alt="bg-group-1"
            className="object-cover"
          />
          <div className=" max-w-[300px]">
            <p className="text-4xl font-bold">
              Create an invite-only place where you belong
            </p>
            <p className="mt-4 leading-8">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </SectionInView>
      </div>
      <div className="text-black bg-gray-100 w-full h-[34rem]">
        <SectionInView className="flex justify-center max-w-5xl gap-10 pt-20 mx-auto">
          <div className="max-w-[300px]">
            <p className="text-4xl font-bold">Where hanging out is easy</p>
            <p className="leading-8">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <img
            src="/src/assets/bg-group-2.png"
            alt="bg-group-2"
            className="object-cover"
          />
        </SectionInView>
      </div>
      <div className="text-black w-full h-[34rem] bg-white">
        <SectionInView className="flex justify-center max-w-5xl gap-10 pt-20 mx-auto">
          <img
            src="/src/assets/bg-group-3.png"
            alt="bg-group-3"
            className="object-cover"
          />
          <div className=" max-w-[300px]">
            <p className="text-4xl font-bold">From few to a fandom</p>
            <p className="mt-4 leading-8">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </SectionInView>
      </div>
      <div className=" bg-gray-100 w-full py-20 text-black">
        <SectionInView className=" items-center max-w-4xl mx-auto">
          <div className=" text-center h-max ">
            <h1 className="text-6xl font-bold ">
              Reliable tech for staying close
            </h1>
            <p className="mt-4 leading-8  ">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
          </div>
          <img
            src="/src/assets/bg-group-4.svg"
            alt="bg-call"
            className="object-cover  mx-auto"
          />
          <div className="relative w-full h-max py-2 mt-12">
            <div className="absolute overflow-hidden w-full">
              <img
                src="/src/assets/bg-start.svg"
                className="object-cover mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-center z-1 mt-8">
              Ready to start your journey?
            </h1>
            <Button className="flex h-16 gap-4 px-6 mt-10 text-xl rounded-full hover:shadow-xl mx-auto">
              <span>
                <Download />
              </span>
              Download for Windows
            </Button>
          </div>
        </SectionInView>
      </div>
      <Footer />
    </div>
  );
}
