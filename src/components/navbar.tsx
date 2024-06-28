import Image from "next/image";
import React from "react";
import { NavbarRoutes } from "./navbar-routes";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { MobileNavbarRoutes } from "./modile-navbar-routes";

export const Navbar = () => {
  return (
    <Sheet>
      <div className="bg-black fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4">
        <div>
          <Link href={"/"}>
            <Image
              // className="hue-rotate-[260deg]"
              src="/logo.png"
              alt="HRDC logo"
              width={180}
              height={30}
            />
          </Link>
        </div>
        <NavbarRoutes />
        <div className="md:hidden block">
          <SheetTrigger>
            <Menu className="text-white size-10 select-none" />
          </SheetTrigger>
          <SheetContent side="top">
            <SheetTitle>
              <Link href={"/"}>
                <Image
                  // className="hue-rotate-[260deg]"
                  src="/hrdc-logo.png"
                  alt="HRDC logo"
                  width={180}
                  height={30}
                />
              </Link>
            </SheetTitle>
            <MobileNavbarRoutes />
          </SheetContent>
        </div>
      </div>
    </Sheet>
  );
};
