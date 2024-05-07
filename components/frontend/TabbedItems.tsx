"use client";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";

export function TabbedItems() {
  const services = [
    {
      title: "Telehealth",
      slug: "tele-health",
    },
    {
      title: "Video prescription refill",
      slug: "tele-health",
    },
    {
      title: "In-person doctor visit",
      slug: "tele-health",
    },
    {
      title: "UTI consult",
      slug: "tele-health",
    },
    {
      title: "ED consult",
      slug: "tele-health",
    },
    {
      title: "Mental health consult",
      slug: "tele-health",
    },
    {
      title: "Urgent care visit",
      slug: "tele-health",
    },
  ];

  const tabs = [
    {
      title: "Popular Services",
      icon: Microscope,
      component: <ServiceList services={services} />,
      content: [],
    },
    {
      title: "Doctors",
      icon: Stethoscope,
      component: <LinkCards />,
      content: [],
    },
    {
      title: "Specialsts",
      icon: Activity,
      component: <LinkCards className="bg-blue-900" />,
      content: [],
    },
    {
      title: "Symptoms",
      icon: Syringe,
      component: <LinkCards className="bg-purple-950" />,
      content: [],
    },
  ];

  return (
    <Tabs aria-label="Default tabs" style="underline">
      {tabs.map((tab, i) => (
        <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
          {tab.component}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
