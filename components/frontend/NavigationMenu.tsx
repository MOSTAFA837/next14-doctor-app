"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Video prescription refill",
        slug: "video-prescription-refill",
        description: "",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        description: "",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description: "",
      },
      {
        title: "ED consult",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Mental health consult",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Urgent care visit",
        slug: "tele-health",
        description: "",
      },
    ],
  },
  {
    title: "Doctors",
    services: [
      {
        title: "Primary care",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Dermatology",
        slug: "video-prescription-refill",
        description: "",
      },
      {
        title: "Pediatrics",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Men’s health",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Women’s health",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Dental",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Imaging & radiology",
        slug: "tele-health",
        description: "",
      },
    ],
  },
  {
    title: "Specialties",
    services: [
      {
        title: "Primary care",
        slug: "tele-health",
        description: "",
      },
      {
        title: "OB/GYN",
        slug: "video-prescription-refill",
        description: "",
      },
      {
        title: "Dermatology",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Pediatrics",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Dentistry",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Gastroenterology",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Urology",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Radiology",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Cardiology",
        slug: "tele-health",
        description: "",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Anxiety",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Depression",
        slug: "video-prescription-refill",
        description: "",
      },
      {
        title: "Asthma",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Erectile Dysfunction",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Back pain",
        slug: "tele-health",
        description: "",
      },
      {
        title: "UTI",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Flu, cough, or cold",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Acne",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Tooth pain",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Vaginal itching",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Itchy skin",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Ear infection",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Sore throat",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Rash",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Migraine",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Diarrhea",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Eczema",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Dizziness",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Fever",
        slug: "tele-health",
        description: "",
      },
      {
        title: "Vomiting",
        slug: "tele-health",
        description: "",
      },
    ],
  },
];

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-2">
        {menuItems.map((item, i) => {
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.services.map((service, i) => (
                    <ListItem
                      key={i}
                      title={service.title}
                      href={`/services/${service.slug}`}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
