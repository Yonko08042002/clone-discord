import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CameraIcon, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import createMyOwn from "@/assets/svgs/create-my-own.svg";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

enum Step {
  CREATE_YOUR_SERVER = "CREATE_YOUR_SERVER",
  TELL_US_MORE = "TELL_US_MORE",
  CUSTOMIZE_YOUR_SERVER = "CUSTOMIZE_YOUR_SERVER",
}

const tabClass =
  "p-4 mt-0 bg-primary-foreground/10 data-[state=inactive]:w-0 data-[state=inactive]:p-0  data-[state=inactive]:translate-x-[50%] data-[state=active]:translate-x-0 transition-transform ease-out";

export default function AddOrgModel() {
  const [step, setStep] = useState(Step.CREATE_YOUR_SERVER);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setStep(Step.CREATE_YOUR_SERVER);
    setOpen(true);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={onOpen}>
        <div className=" ml-1 cursor-pointer w-12 h-12 rounded-full bg-gray-600 text-green-500 items-center flex justify-center hover:bg-green-500 hover:text-white hover:rounded-lg">
          <Plus />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary-foreground/10 p-0">
        <Tabs
          className="w-full overflow-hidden bg-primary-foreground/10 rounded-md"
          value={step}
        >
          <TabsContent
            value={Step.CREATE_YOUR_SERVER}
            className={tabClass}
            hidden={false}
          >
            <h1 className="text-xl font-bold text-center">
              Create Your Server
            </h1>
            <p className="mt-2 text-gray-400">
              Your sever is where you and your friends hang out
            </p>
            <div>
              <div
                onClick={() => setStep(Step.TELL_US_MORE)}
                className="flex gap-2 mt-4 justify-between border p-4 items-center border-white rounded-sm hover:bg-primary-foreground/20 cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  <img src={createMyOwn} />
                  <span>Create My Own </span>
                </div>
                <ChevronRight />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value={Step.TELL_US_MORE}
            className={tabClass}
            hidden={false}
          >
            <h1 className="text-xl font-bold text-center">
              Tell Us More About Your Server
            </h1>
            <p className="mt-2 text-gray-400">
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </p>
            <div
              onClick={() => setStep(Step.CUSTOMIZE_YOUR_SERVER)}
              hidden={false}
            >
              <div className="flex gap-2 mt-4 justify-between border p-4 items-center border-white rounded-sm hover:bg-primary-foreground/20 cursor-pointer">
                <div className="flex gap-2 items-center">
                  <img src={createMyOwn} />
                  <span>For me and my friends </span>
                </div>
                <ChevronRight />
              </div>
            </div>
            <button
              className="mt-4"
              onClick={() => setStep(Step.CREATE_YOUR_SERVER)}
            >
              Back
            </button>
          </TabsContent>
          <TabsContent value={Step.CUSTOMIZE_YOUR_SERVER} className={tabClass}>
            <h1 className="text-xl font-bold text-center">
              Customize Your Server
            </h1>
            <p className="mt-2 text-gray-400">
              In order to help you with your setup, is your new server for just
              a few friends or a larger community?
            </p>
            <div className="flex justify-center items-center my-3">
              <button className="relative flex flex-col p-4 items-center gap-2 bg-transparent rounded-full border-[2px] border-white border-dashed">
                <div className="absolute bg-primary rounded-full top-0 right-0">
                  <Plus />
                </div>
                <CameraIcon />
                <span className="uppercase text-xs font-bold">Upload</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="uppercase text-xs font-bold">Name Org</h2>
              <Input className="bg-background/40 rounded-sm h-11" type="text" />
            </div>
            <div className="flex justify-between">
              <button
                className="mt-4"
                onClick={() => setStep(Step.TELL_US_MORE)}
              >
                Back
              </button>
              <Button className="mt-4 h-max bg-primary">Create</Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
