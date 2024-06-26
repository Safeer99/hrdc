import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <main className="mt-24 min-h-[90vh] h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
