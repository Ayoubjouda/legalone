import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
interface faqProps {}

const Faq: FC<faqProps> = () => {
  return (
    <section className="z-[20] flex flex-col max-w-screen-xl items-center w-full justify-center gap-12   py-[120px] text-center">
      <div className="flex flex-col items-center justify-start gap-6">
        <div className="text-3xl font-medium px-3 md:text-5xl">
          Frequently asked questions
        </div>
        <div className="max-w-xl text-center text-neutral-700 text-lg px-3 font-normal font-ibmPlexSans  leading-7">
          Ask everything you need to know about our products and services.
        </div>
      </div>
      <div className="w-full text-base max-w-screen-lg  ">
        <Accordion
          type="multiple"
          className="cursor-pointer    tracking-tight  text-lg text-black border bg-white  rounded-md mx-3 "
          defaultValue={['item-1']}
        >
          <AccordionItem
            value="item-1"
            className="px-3 py-2 "
          >
            <AccordionTrigger className=" font-bold text-start ">
              How do I choose the right supplement for my needs?
            </AccordionTrigger>
            <AccordionContent className=" flex items-start text-start text-base">
              We offer a personalized quiz that takes into account your specific
              health goals, dietary preferences, and lifestyle factors. Based on
              your responses, we provide tailored recommendations to help you
              find the supplements that best suit your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-23"
            className="px-3  py-2 "
          >
            <AccordionTrigger className="font-bold text-start">
              Do you provide any moneyback guarantee in this product?
            </AccordionTrigger>
            <AccordionContent className=" flex items-start text-start text-base">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-333"
            className="px-3  py-2"
          >
            <AccordionTrigger className="font-bold text-start">
              What payment method do you support?
            </AccordionTrigger>
            <AccordionContent className=" flex items-start text-start text-base">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-12"
            className="px-3  py-2"
          >
            <AccordionTrigger className="font-bold text-start">
              Will I get money back if I am not satisfied?
            </AccordionTrigger>
            <AccordionContent className=" flex items-start text-start text-base">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3232"
            className="px-3  py-2 border-none"
          >
            <AccordionTrigger className="font-bold text-start">
              What payment method do you support?
            </AccordionTrigger>
            <AccordionContent className=" flex items-start text-start text-base">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
