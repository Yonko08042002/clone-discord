import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import img_one from "/src/assets/img_1_download.svg";
import img_two from "/src/assets/img_2_download.svg";
import img_three from "/src/assets/img_3_download.svg";
import img_four from "/src/assets/img_4_download.svg";
import img_five from "/src/assets/img_5_download.svg";

import ButtonDownload from "@/components/ButtonDownload";
import Footer from "@/components/Footer";
export default function Component() {
  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-col mx-auto items-center  text-white  bg-black/80">
        <Navbar />
        <div className="w-full lg:flex lg:p-28 justify-between">
          <div className="lg:w-1/2">
            <div className="flex flex-col items-start justify-center max-w-[800px] ">
              <p className="text-6xl font-bold font-">
                GET DISCORD <br />
                FOR ANY DEVICE
              </p>
              <p className="mt-10 text-xl ">
                An adventure awaits. Hang out with your friends on our desktop
                app and keep the conversation going on mobile.
              </p>
            </div>
            <div className="flex gap-6 mt-10 items-center">
              <Button className="flex h-16 gap-4 px-6 text-xl text-white bg-[#5865f2] rounded-full hover:bg-[#5865f2] hover:text-yellow-50 hover:shadow-xl">
                <span>
                  <Download />
                </span>
                Download for Windows
              </Button>

              <p className="">Windows 7 or higher</p>
            </div>
          </div>
          <div className="flex items-center">
            <img className="h-full m-auto" src={img_one} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-8 p-32">
        <div className="w-1/2 flex flex-col gap-8">
          <div className=" overflow-hidden box-border bg-gray-100 rounded-xl p-10  lg:h-[600px]">
            <div className="w-full flex flex-col items-center gap-6">
              <p className="text-3xl font-bold">iOS</p>
              <ButtonDownload />
            </div>
            <img className="mt-10 w-screen h-screen" src={img_two} alt="" />
          </div>
          <div className="  bg-gray-100 rounded-xl p-10 ">
            <div className="w-full flex flex-col items-center gap-6">
              <p className="text-3xl font-bold">Android</p>
              <ButtonDownload />
            </div>
            <img className="mt-10 mx-auto" src={img_four} alt="" />
          </div>
          <div className="flex flex-col gap-4  bg-gray-100 rounded-xl p-10 ">
            <p className="text-3xl font-bold">Feeling experimental?</p>
            <p className="text-xl">
              Try our Public Test Build and test new features before they
              launch.
            </p>
            <Button className=" flex w-max p-7 text-xl text-white bg-black/80 rounded-full hover:bg-black hover:text-yellow-50 hover:shadow-xl">
              Download Public Test Build
              <span>
                <ChevronDown />
              </span>
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-8 my-auto">
          <div className=" overflow-hidden box-border bg-gray-100 rounded-xl p-10  lg:h-[600px]">
            <div className="w-full flex flex-col items-center gap-6">
              <p className="text-3xl font-bold">Linux</p>
              <ButtonDownload />
            </div>
            <img className="mt-10 w-screen h-screen" src={img_three} alt="" />
          </div>
          <div className="  bg-gray-100 rounded-xl p-10 ">
            <div className="w-full flex flex-col items-center gap-6">
              <p className="text-3xl font-bold">Mac</p>
              <ButtonDownload />
            </div>
            <img className="mt-10 mx-auto" src={img_five} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
