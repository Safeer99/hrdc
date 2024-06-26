"use client";

import { navbarRoutesList } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-8 items-center">
      {navbarRoutesList.map((item) => (
        <div key={item.title}>
          {item.components ? (
            <NavigationMenu className="group/trigger">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={clsx(
                      "bg-transparent text-white group-hover/trigger:text-green-500 group-hover/trigger:bg-transparent focus:bg-transparent focus:text-green-500 data-[active]:bg-transparent data-[state=open]:bg-transparent capitalize p-0 duration-300 font-semibold",
                      {
                        "text-green-600": pathname.includes(item.href),
                      }
                    )}
                  >
                    {item.title}
                    <div
                      className={clsx(
                        "absolute h-1 w-0 left-0 group-hover/trigger:w-full bg-white group-hover/trigger:bg-green-600 -bottom-[30px] duration-300",
                        {
                          "!bg-green-600 w-full": pathname.includes(item.href),
                        }
                      )}
                    />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-4 pr-10 w-max">
                      {item.components.map((component) => (
                        <Link
                          target={component.downloadable ? "_blank" : undefined}
                          rel={
                            component.downloadable
                              ? "noopener noreferrer"
                              : undefined
                          }
                          href={component.href}
                          key={component.href}
                        >
                          <li
                            className={clsx(
                              "text-sm flex items-center py-2 hover:text-green-600 duration-300 group/item capitalize text-muted-foreground",
                              {
                                "!text-green-600": pathname.includes(
                                  component.href
                                ),
                              }
                            )}
                          >
                            <ArrowRight
                              className={clsx(
                                "mr-2 size-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 duration-300 text-green-500",
                                {
                                  "opacity-100 translate-x-0":
                                    pathname.includes(component.href),
                                }
                              )}
                            />
                            {component.title}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <Link href={item.href}>
              <div
                className={clsx(
                  "relative h-10 flex items-center text-white font-semibold hover:text-green-500 text-sm capitalize group/trigger",
                  {
                    "!text-green-600": pathname.includes(item.href),
                  }
                )}
              >
                {item.title}
                <div
                  className={clsx(
                    "absolute h-1 w-0 left-0 group-hover/trigger:w-full bg-white group-hover/trigger:bg-green-600 -bottom-[30px] duration-300",
                    {
                      "!bg-green-600 w-full": pathname.includes(item.href),
                    }
                  )}
                />
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
