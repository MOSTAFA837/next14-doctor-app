import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DoctorCard({
  isInPerson = false,
}: {
  isInPerson?: boolean;
}) {
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
    <div className="border border-gray-200 bg-white inline-flex items-start py-8 px-6 rounded-md justify-start flex-col hover:border-gray-400 duration-300 transition-all">
      <Link href="/doctors/slug" className="border-b border-gray-400">
        <h2 className="uppercase font-bold text-2xl tracking-widest">
          Vijal Patel, PAC
        </h2>

        {isInPerson && (
          <p className="py-3">3250 Lincoln Highway, Kendall, NJ 08824</p>
        )}

        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src="/doc-profile.jpeg"
              width={243}
              height={207}
              alt="Doctor"
              className="w-24 h-24 rounded-full object-cover"
            />

            {!isInPerson && (
              <p className="absolute bottom-0 right-2 bg-blue-200 w-10 text-blue-700 h-10 flex items-center justify-center rounded-full">
                <Video className="w-6 h-6" />
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>

            <p className="py-3 bg-green-200 px-6 uppercase">available today </p>
          </div>
        </div>
      </Link>

      <div className="pt-8">
        <h3 className="flex gap-4 justify-between items-center">
          <span className=" text-gray-600">Thu, May 9</span>{" "}
          <span className=" font-bold">$137</span>
        </h3>

        <div className="py-3 grid grid-cols-3 gap-4">
          {timeStamps.slice(0, 5).map((item, i) => (
            <Link
              href="#"
              key={i}
              className="bg-blue-600 text-white py-2 text-center px-3 "
            >
              {item.time} {item.period}
            </Link>
          ))}

          <Link
            href="/doctors/slug"
            className="bg-blue-900 truncate text-white text-center py-2 px-3 "
          >
            More times
          </Link>
        </div>
      </div>
    </div>
  );
}
