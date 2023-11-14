import OrgSidebar from "@/components/OrgSidebar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

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

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    if (window.location.pathname == "/") {
      navigate(`/orgs/${ORGS[0].id}`);
    }
  }, [navigate]);
  return (
    <div className="flex space-y-0 h-screen">
      <OrgSidebar orgs={ORGS} />
      <Outlet />
    </div>
  );
}
