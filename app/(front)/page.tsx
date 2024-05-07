import Brands from "@/components/frontend/Brands";
import Hero from "@/components/frontend/Hero";
import Services from "@/components/frontend/Services";

export default function Home() {
  return (
    <section className="flex justify-center flex-col">
      <Hero />
      <Brands />
      <Services />
    </section>
  );
}
