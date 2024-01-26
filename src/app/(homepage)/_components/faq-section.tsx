import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const Faq = () => {
  return (
    <div className=" w-full ">
      <div className=" md:w-5/6 w-full mx-auto  pb-10 max-w-7xl">
        <div className="text-white mt-10 text-left w-full p-4 text-3xl mx-auto flex items-center justify-start  ">
          FAQs
        </div>
        <Accordion type="single" collapsible className="w-full p-4 text-white ">
          <AccordionItem
            value="item-1"
            className="border-none rounded-xl bg-gradient-to-l from-indigo-950 to-gray-900 px-3 "
          >
            <AccordionTrigger>What is Devscribe.AI?</AccordionTrigger>
            <AccordionContent>
              Its AI which let you talk to youtube videos and github repos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
