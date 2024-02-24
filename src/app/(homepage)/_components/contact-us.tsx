import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
const ContactUs = () => {
  const email="abirdutta90990@gmail.com"
  return (
    <div key="1" className="flex justify-center items-center py-12 w-full bg-white" id="contact">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full">
        <div className="grid gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-4">Feel free to reach out to us!</p>
          
          </div>
          <div className="text-center">
            <h2 className="border-t border-gray-300 pt-4 text-3xl font-bold mb-4">
            
            </h2>
            <p className="text-gray-600 mb-4">
              Let&apos;s support each other. Talk to us about your project!
            </p>
            <Link href={`mailto:${email}`}>
            <Button  className="bg-gradient-to-b from-blue-500 to-blue-600 hover:-translate-y-[2px] transition-transform shadow-sm">
              Talk to Us
              {' '}
              <MoveRight size={20} />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
