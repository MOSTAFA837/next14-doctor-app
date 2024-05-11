import React from "react";
import SectionHeading from "../../SectionHeading";
import ToggleButton from "../../ToggleButton";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { Map } from "lucide-react";
import DoctorsListCarousel from "./DoctorsListCarousel";

export default function DoctorsList({
  title = "Telehealth visit",
  isInPerson,
  className = "bg-pink-100 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]",
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {
  const doctors = [
    {
      name: "mostafa",
    },
    {
      name: "mostafa",
    },
    {
      name: "mostafa",
    },
    {
      name: "mostafa",
    },
    {
      name: "mostafa",
    },
    {
      name: "mostafa",
    },
  ];

  return (
    <section className={className}>
      <div className="container mx-auto">
        <SectionHeading title={title} />

        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link
              href=""
              className=" text-blue-700 font-semibold text-sm flex items-center"
            >
              <Map className="mr-2 flex-shrink-0 w-4 h-4" />
              <span>Map view</span>
            </Link>
          ) : (
            <ToggleButton />
          )}

          <Link
            href="#"
            className="py-3 px-6 border border-blue-600 bg-white rounded-lg"
          >
            See all
          </Link>
        </div>

        <div className="py-6">
          <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson} />
        </div>
      </div>
    </section>
  );
}
