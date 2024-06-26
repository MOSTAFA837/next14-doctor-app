import React from "react";
import { TabbedItems } from "./TabbedItems";
import SectionHeading from "../SectionHeading";

export type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  details: string;
};

const Services = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12  lg:mb-20">
              <SectionHeading title="Top-rated online doctors & specialists available now." />

              <p className="text-base text-body-color dark:text-dark-6">
                Choose from thousands of providers at every day affordable
                prices. Book online today.
              </p>
            </div>
          </div>
        </div>

        <TabbedItems />
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details }: ServiceCardProps) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
