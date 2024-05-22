"use client";

import {
  Bell,
  Folder,
  Grid2X2,
  Home,
  LineChart,
  Package2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "flowbite-react";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function Sidebar() {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Products", path: "/dashboard/products", icon: Grid2X2 },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: Folder,
      badgeCount: 3,
    },
    { name: "Reports", path: "/dashboard/reports", icon: LineChart },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
    { name: "Logout", path: "/dashboard/logout", icon: Bell },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Doctor Freelancing</span>
          </Link>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarLinks.map((link, i) => {
              const Icon = link.icon;

              return (
                <Link
                  key={i}
                  href={link.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3  transition-all ",
                    pathname === link.path
                      ? "bg-blue-700 text-white hover:bg-blue-500"
                      : "hover:text-primary text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                  {link.badgeCount && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-900">
                      {link.badgeCount}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
