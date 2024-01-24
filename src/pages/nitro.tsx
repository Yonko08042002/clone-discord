import Navbar from "@/components/Navbar";
import nitroVideo from "/src/assets/video_nitro.webm";
export default function Component() {
  return (
    <div className="relative w-full h-screen">
      <div className="h-[20rem]">
        <video width="100%" height="100%" autoPlay loop muted>
          <source src={nitroVideo} type="video/webm" />
        </video>
      </div>
      <div className="absolute top-1 w-full flex flex-col mx-auto items-center  bg-no-repeat bg-cover text-white h-[38rem]">
        <Navbar />

        <div className="w-full lg:flex lg:p-32 justify-between">
          <div className="lg:w-1/3">
            <div className="flex flex-col items-start justify-center max-w-[800px] ">
              <p className="text-6xl font-bold font-">
                Unleash <br /> more fun <br /> with Nitro
              </p>
              <p className="mt-10 text-lg ">
                Subscribe to Nitro to upgrade your emoji, personalize your
                profile, share bigger files, and so much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
