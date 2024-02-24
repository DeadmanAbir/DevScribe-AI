import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MeetTheCreator = () => {
  return (
    <div
      className="mt-20 h-full  w-full flex flex-col items-center justify-center p-2 max-w-7xl "
      id="teams"
    >
      <div className="md:text-4xl text-3xl font-semibold">
        Meet the Creators
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-10 md:w-1/2 w-full items-center justify-center  h-72 ">
        <CreatorCard
          name="Abir Dutta"
          role="Full Stack Developer"
          twitter="https://twitter.com/ItsDutta99"
          linkedln="https://www.linkedin.com/in/abir-dutta-408759223/"
          github="https://github.com/DeadmanAbir"
          imgUrl="/abir_dutta2 (1).jpg"
        />
        <CreatorCard
          name="Faisal Husain"
          role="Full Stack Developer"
          twitter="https://twitter.com/Faisalh004"
          linkedln="https://www.linkedin.com/in/faisal004/"
          github="https://github.com/faisal004"
          imgUrl="/faisal (2).jpg"
        />
      </div>
    </div>
  );
};

export default MeetTheCreator;

const CreatorCard = ({
  name,
  role,
  twitter,
  linkedln,
  github,
  imgUrl,
}: {
  name: string;
  role: string;
  twitter: string;
  linkedln: string;
  github: string;
  imgUrl: string;
}) => {
  return (
    <div className="w-full h-72 relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-white to-blue-100 mx-auto flex flex-col items-center  pt-10 gap-3 rounded-xl shadow-lg hover:shadow-2xl shadow-slate-300">
      <div>
        <Avatar className="h-20 w-20">
          <AvatarImage src={imgUrl} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm font-semibold">{role}</div>
      <div className="flex gap-2 absolute bottom-6">
        <Link
          href={github}
          target="_blank"
          className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center "
        >
          <Image
            src="/icons8-github.svg"
            alt="twitter"
            height={25}
            width={25}
          />
        </Link>{" "}
        <Link
          href={twitter}
          target="_blank"
          className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center "
        >
          <Image
            src="/icons8-twitterx (1).svg"
            alt="twitter"
            height={25}
            width={25}
          />
        </Link>
        <Link
          href={linkedln}
          target="_blank"
          className="bg-white rounded-xl hover:bg-slate-300  px-2 py-1 cursor-pointer border-2 border-gray-500 flex justify-center items-center "
        >
          <Image src="/linkedin.svg" alt="twitter" height={25} width={25} />
        </Link>
      </div>
    </div>
  );
};
