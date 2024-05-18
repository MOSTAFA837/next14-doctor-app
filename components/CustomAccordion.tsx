import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQ = {
  qn: string;
  ans: string | React.ReactNode;
};

export type FAQArray = FAQ[];

export function CustomAccordion({ FAQs }: { FAQs: FAQ[] }) {
  return (
    <div className="flex gap-12 justify-between">
      <h3 className="pr-80 text-xl font-semibold">FAQs</h3>

      <Accordion type="single" collapsible className="w-full">
        {FAQs.map((faq, i) => (
          <AccordionItem value={`faq-${i}`} key={i}>
            <AccordionTrigger>{faq.qn} ?</AccordionTrigger>
            <AccordionContent>{faq.ans}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
