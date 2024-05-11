import FixedBookButton from "@/components/FixedBookButton";
import DoctorDetails from "@/components/frontend/doctors/DoctorDetails";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-slate-50 py-8 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto rounded-md shadow-2xl">
        <div className="py-8 px-8">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-2xl tracking-widest">
                  Vijal Patel, PA-C
                </h2>
                <p className=" text-gray-500 text-xs uppercase">Adult health</p>
              </div>

              <div className="py-3">
                <p>In-person doctor visit</p>
                <p>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
              </div>
            </div>

            <Image
              src="/doc-profile.jpeg"
              width={243}
              height={207}
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="">
          <DoctorDetails />
        </div>
      </div>

      <FixedBookButton />
    </div>
  );
}
