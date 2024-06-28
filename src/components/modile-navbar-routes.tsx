"use client";

import { navbarRoutesList } from "@/lib/data";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNavbarRoutes = () => {
  const pathname = usePathname();
  return (
    <div className="mt-10 px-4 pb-2">
      <Accordion type="single">
        {navbarRoutesList.map((item) => (
          <div key={item.title}>
            {item.components ? (
              <AccordionItem className="border-none" value={item.title}>
                <AccordionTrigger
                  className={clsx(
                    "hover:no-underline capitalize hover:text-green-600",
                    {
                      "text-green-600": pathname.includes(item.href),
                    }
                  )}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
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
                      <div
                        className={clsx(
                          "py-2 ml-8 font-medium capitalize hover:text-green-600",
                          {
                            "text-green-600": pathname.includes(component.href),
                          }
                        )}
                      >
                        {component.title}
                      </div>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Link href={item.href}>
                <div
                  className={clsx("py-4 font-medium capitalize", {
                    "text-green-600": pathname.includes(item.href),
                  })}
                >
                  {item.title}
                </div>
              </Link>
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
};
