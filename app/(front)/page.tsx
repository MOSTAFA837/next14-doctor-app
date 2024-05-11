import DoctorsList from "@/components/frontend/doctors/DoctorsList";
import Brands from "@/components/frontend/Brands";
import Hero from "@/components/frontend/Hero";
import Services from "@/components/frontend/Services";

export default function Home() {
  return (
    <section className="flex justify-center flex-col">
      <Hero />
      <Brands />
      <Services />
      <DoctorsList />
      <DoctorsList
        title="In-person doctor visit"
        isInPerson={true}
        className="bg-white py-8 lg:py-24"
      />
    </section>
  );
}
