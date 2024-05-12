import { ReactNode } from "react";

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
