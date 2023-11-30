import OrgSidebar from "@/components/OrgSidebar";
import { getToken } from "@/lib/storage";
import { redirect } from "@/router";

import { Outlet } from "react-router-dom";

const ORGS = [
  {
    id: "1",
    icon: "https://pbs.twimg.com/profile_images/1645815519369629696/3EZECjMo_400x400.jpg",
    name: "imgnai",
  },
  {
    id: "2",
    icon: "https://enouvo.com/wp-content/uploads/2022/07/cropped-logo-vien-trang-file-in-01.png",
    name: "enouvo",
  },
];

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect("/login");
  }
  return null;
}

export default function App() {
  return (
    <div className="flex space-y-0 h-screen bg-background w-full">
      <OrgSidebar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
