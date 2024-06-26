import { Navbar } from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <main className="mt-24">{children}</main>
    </div>
  );
};

export default MainLayout;
