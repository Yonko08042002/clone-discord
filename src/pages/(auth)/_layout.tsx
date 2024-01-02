import { getOrgs } from "@/apis/orgs";
import OrgSidebar from "@/components/OrgSidebar";
import { getToken } from "@/lib/storage";
import { redirect } from "@/router";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect("/login");
  }
  return null;
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const { data } = useQuery(["orgs"], () => getOrgs());

  return (
    <div className="flex space-y-0 h-screen bg-background w-full">
      <OrgSidebar orgs={data?.data ?? []} />
      <Outlet />
    </div>
  );
}
