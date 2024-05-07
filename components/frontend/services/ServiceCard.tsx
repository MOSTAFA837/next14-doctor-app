import Link from "next/link";
import { ServiceProps } from "./ServiceList";

export default function ServiceCard({ service }: { service: ServiceProps }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded-md bg-slate-200 overflow-hidden hover:bg-slate-300 px-3 py-4 duration-300"
    >
      <h2>{service.title}</h2>
      <p className="text-[.7rem]">635 Doctors available</p>
    </Link>
  );
}
