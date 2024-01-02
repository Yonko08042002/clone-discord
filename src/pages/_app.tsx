import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function Layout() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right" />
      <div className="flex h-screen bg-primary-foreground text-black">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}   

