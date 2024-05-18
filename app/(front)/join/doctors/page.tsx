import { CustomAccordion, FAQArray } from "@/components/CustomAccordion";
import CustomButton from "@/components/CustomButton";
import { Pricing } from "@/components/frontend/Pricing";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const features = [
    "Doctor brings patients to you",
    "Seamless e-prescribing experience",
    "Integrated clinical note-taking",
    "No fees for providers",
  ];

  const faqs: FAQArray = [
    {
      qn: "How do I join?",
      ans: "Joining Doctor app is quick and easy. Fill out the form on this page or email doctors@sesamecare.com and an onboarding specialist will help you get started.",
    },
    {
      qn: "What does the onboarding process look like?",
      ans: "After you complete the initial account creation process on this page, you will be sent an email with the next steps in the onboarding process, which includes collecting additional information on your practice and completing our provider training. Once completed, it typically takes 3-5 business days for your profile to be live on Sesame.",
    },
    {
      qn: "How do patients pay?",
      ans: "Patients pay upfront on the Sesame platform while booking their appointments.Payments can be made using a credit card, debit card, Health Savings Account (HSA), or Flexible Spending Account (FSA). However, Sesame does not accept insurance in order to keep prices transparent.",
    },
    {
      qn: "When do I get paid?",
      ans: "Providers are paid via direct deposit on a weekly basis.",
    },
    {
      qn: "How do I know if I get a booking?",
      ans: "Sesame sends an automated email (and optional SMS notification) whenever you receive a booking which includes the date and time of the appointment. Patients also receive an email confirmation as an appointment reminder.",
    },
    {
      qn: "What is the cancellation policy for patients?",
      ans: "Patients can cancel 24 hours before the appointment for in-person visits and 3 hours before the appointment for virtual visits if their circumstances change. If a patient no-shows or cancels outside of that policy, they do not qualify for a refund and the provider still receives payment for the service.",
    },
    {
      qn: "Are there any fees involved with joining or listing on Sesame?",
      ans: "No! It is free for all providers to list on the Sesame platform. There are no fees associated with listing on the Sesame marketplace as a provider.",
    },
    {
      qn: "How do I select what services I offer?",
      ans: "Providers can select what services they would like to offer based on their specialty and the service templates available on Sesame. Sesame Provider Success can assist providers with determining which service templates to list. If there is a service you offer that is not currently offered on Sesame, ask your Account Manager for details on adding a service.",
    },
  ];

  return (
    <>
      <section className="min-h-screen mt-[130px]">
        <div className="py-16 px-12 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
          <div className=" md:max-w-lg md:px-8">
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[3.5rem]">
              Build a thriving{" "}
              <span className=" text-blue-800 font-semibold">direct-pay</span>{" "}
              practice with Sesame.
            </h2>
            <p className="py-4">
              Doctor is a full-service platform to help you build and run your
              practice and care for patients for virtual care, in-person care,
              or both.
            </p>
            <CustomButton
              title="List your service"
              href="#"
              classes="bg-violet-700 hover:bg-violet-600 w-[250px] mx-auto h-[60px]"
            />
            <div className="py-8">
              {features.map((feature, i) => (
                <p className="flex gap-3 mb-3 text-lg font-semibold" key={i}>
                  <Check className="text-violet-700" />
                  {feature}
                </p>
              ))}
            </div>
          </div>

          <Image
            src="/ManScrubsMask.png"
            alt="ManScrubsMask"
            width={1170}
            height={848}
          />
        </div>
      </section>

      <section className="mx-auto px-16">
        <Pricing />
      </section>

      <section className="py-16 mx-auto max-w-6xl">
        <CustomAccordion FAQs={faqs} />
      </section>
    </>
  );
}
