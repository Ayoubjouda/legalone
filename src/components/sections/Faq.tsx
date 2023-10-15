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
    <section className='z-[20] flex w-full max-w-screen-xl flex-col items-center justify-center gap-12   py-[120px] text-center'>
      <div className='flex flex-col items-center justify-start gap-6'>
        <div className='px-3 text-3xl font-medium md:text-5xl'>
          Frequently asked questions
        </div>
        <div className='max-w-xl px-3 text-center font-ibmPlexSans text-lg font-normal leading-7  text-neutral-700'>
          Ask everything you need to know about our products and services.
        </div>
      </div>
      <div className='w-full max-w-screen-lg text-base  '>
        <Accordion
          type='multiple'
          className='mx-3    cursor-pointer  rounded-md border bg-white text-lg  tracking-tight text-black '
          defaultValue={['item-1']}
        >
          <AccordionItem
            value='item-1'
            className='px-3 py-2 '
          >
            <AccordionTrigger className=' text-start font-bold '>
              How do I choose the right supplement for my needs?
            </AccordionTrigger>
            <AccordionContent className=' flex items-start text-start text-base'>
              We offer a personalized quiz that takes into account your specific
              health goals, dietary preferences, and lifestyle factors. Based on
              your responses, we provide tailored recommendations to help you
              find the supplements that best suit your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-23'
            className='px-3  py-2 '
          >
            <AccordionTrigger className='text-start font-bold'>
              Do you provide any moneyback guarantee in this product?
            </AccordionTrigger>
            <AccordionContent className=' flex items-start text-start text-base'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-333'
            className='px-3  py-2'
          >
            <AccordionTrigger className='text-start font-bold'>
              What payment method do you support?
            </AccordionTrigger>
            <AccordionContent className=' flex items-start text-start text-base'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-12'
            className='px-3  py-2'
          >
            <AccordionTrigger className='text-start font-bold'>
              Will I get money back if I am not satisfied?
            </AccordionTrigger>
            <AccordionContent className=' flex items-start text-start text-base'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3232'
            className='border-none  px-3 py-2'
          >
            <AccordionTrigger className='text-start font-bold'>
              What payment method do you support?
            </AccordionTrigger>
            <AccordionContent className=' flex items-start text-start text-base'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
