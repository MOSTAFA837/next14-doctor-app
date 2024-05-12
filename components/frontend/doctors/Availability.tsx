"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function Availability() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());

  const GMT = bookDate?.toString().split("GMT")[1].split(" ")[0];
  const formattedDate = `${bookDate
    ?.toString()
    .split(" ")
    .slice(0, 3)
    .join(" ")} - GMT${GMT}`;

  const timeStamps = [
    {
      time: "8:30",
      period: "am",
    },
    {
      time: "89:30",
      period: "am",
    },
    {
      time: "8:30",
      period: "am",
    },
    {
      time: "10:30",
      period: "am",
    },
    {
      time: "11:30",
      period: "am",
    },
    {
      time: "1:30",
      period: "pm",
    },
    {
      time: "2:30",
      period: "pm",
    },
    {
      time: "3:30",
      period: "pm",
    },
    {
      time: "4:30",
      period: "pm",
    },
  ];

  return (
    <div className="mb-[200px]">
      <h2 className="font-bold py-4 text-xl uppercase text-slate-500 tracking-widest">
        Select a date and time
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>

        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            {bookDate && (
              <h2 className="pb-4 text-blue-700 text-center py-3 px-4 border border-blue-500">
                {formattedDate}
              </h2>
            )}

            <div className="py-3 grid grid-cols-3 gap-4">
              {timeStamps.slice(0, 5).map((item, i) => (
                <button
                  key={i}
                  className="bg-blue-600 text-white py-2 text-center px-3 "
                >
                  {item.time} {item.period}
                </button>
              ))}

              <button className="bg-blue-900 truncate text-white text-center py-2 px-3 ">
                More times
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* calendar */}
      {/* availability time */}
    </div>
  );
}
