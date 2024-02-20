import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const ContactUs = () => {
  return (
    <div key="1" className="flex justify-center items-center py-12  w-full bg-white">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full">
        <div className="grid gap-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Are You With Us?</h2>
            <div className="flex justify-center">
              <Input
                className="border-gray-300 mr-2"
                placeholder="your@email.com"
              />
                <Button className='bg-gradient-to-b from-blue-500 to-blue-600 hover:-translate-y-[2px] transition-transform shadow-sm '>Subscribe</Button>
            </div>
            <div className="flex justify-center text-sm text-gray-500 mt-4">
              <span>GET EARLY ACCESS</span>
              <span>TRY IT FOR FREE</span>
              <span>TECHNICAL SUPPORT</span>
            </div>
          </div>
          <div className="text-center">
            <h2 className="border-t border-gray-300 pt-4 text-3xl font-bold mb-4">
              Indie or Not for Profit?
            </h2>
            <p className="mb-4">Let&apos;s support one another.</p>
            <Button className='bg-gradient-to-b from-blue-500 to-blue-600 hover:-translate-y-[2px] transition-transform shadow-sm '>Talk to us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
