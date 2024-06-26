import Image from "next/image";
import React from "react";
import { NavbarRoutes } from "./navbar-routes";

export const Navbar = () => {
  return (
    <div className="bg-black fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4">
      <div>
        <Image
          className=""
          src="/hrdc-logo.png"
          alt="HRDC logo"
          width={180}
          height={30}
        />
      </div>
      <NavbarRoutes />
    </div>
  );
};
