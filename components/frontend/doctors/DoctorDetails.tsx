"use client";

import { useState } from "react";
import Availability from "./Availability";

export default function DoctorDetails() {
  const [isActive, setIsActive] = useState("availability");

  const active = "bg-blue-800 text-white  border-b border-white";
  const inActive = "bg-slate-100 text-slate-800 border-gray-200 border";

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsActive("detils")}
          className={`py-4 px-8 w-full uppercase tracking-widest ${
            isActive === "detils" ? active : inActive
          }`}
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={`py-4 px-8 w-full uppercase tracking-widest ${
            isActive === "availability" ? active : inActive
          }`}
        >
          Availability
        </button>
      </div>

      <div className="py-8 px-6">
        {isActive === "availability" ? (
          <div>
            <Availability />
          </div>
        ) : (
          <div>Service Details Component</div>
        )}
      </div>
    </>
  );
}
