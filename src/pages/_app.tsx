import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="flex  h-screen bg-primary-foreground text-black">
      <Outlet />
    </div>
  );
}
