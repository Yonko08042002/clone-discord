import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "@/router";
import { LogOutIcon, Settings } from "lucide-react";
import { useMemo } from "react";

export default function SettingModel() {
  const navigate = useNavigate();

  const SETTINGS = useMemo(
    () => [
      {
        key: "logout",
        name: "Activity Setting",
        children: [
          {
            name: "Log Out",
            icon: <LogOutIcon />,
            onClick: () => {
              navigate("/login");
            },
          },
        ],
      },
    ],
    [navigate]
  );
  return (
    <Dialog>
      <DialogTrigger>
        <Settings className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className=" flex max-w-full h-screen p-0 gap-0">
        <div className="w-1/3 bg-primary/10 flex justify-end">
          <div className="w-1/2 mt-20 p-2">
            <p className="text-xs font-bold p-2">USER SETTINGS</p>
            <div>
              {SETTINGS.map((setting) => (
                <div key={setting.key}>
                  <div className="bg-primary/30 p-2 rounded-sm">
                    {setting.name}
                  </div>
                  {setting.children.map((child) => (
                    <div key={child.name}>
                      <div
                        className="flex justify-between p-2 cursor-pointer hover:bg-primary/10 rounded-sm"
                        onClick={child.onClick}
                      >
                        {child.name}
                        {child.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-primary/20"></div>
      </DialogContent>
    </Dialog>
  );
}
