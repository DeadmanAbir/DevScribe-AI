import Image from "next/image";

const How = () => {
  return (
    <div className="md:mt-20  w-full flex flex-col items-center justify-center p-2 max-w-7xl" id="features">
      <div className="md:text-5xl text-3xl font-semibold">
        How does Devscribe work?
      </div>
      <div className="flex md:flex-row flex-col-reverse w-11/12 justify-between mt-10 relative ">
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {" "}
          <Image
            src="/folder.png"
            alt="dashboard"
            width={400}
            height={300}
            className="border-2 border-blue-500 rounded-lg cursor-pointer hover:border-blue-700"
          />
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          1
        </div>
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Start by creating a folder </p>
          <p className="text-base">
            This folder structure is provided so that you can keep your chats
            segregated.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-11/12 justify-between  relative ">
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Now create file. </p>
          <p className="text-base">
            Inside folder create file with name and youtube URL.
          </p>
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          2
        </div>
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {" "}
          <Image
            src="/file.png"
            alt="dashboard"
            width={400}
            height={300}
            className="border-2 border-blue-500 rounded-lg cursor-pointer hover:border-blue-700"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse w-11/12 justify-between  relative ">
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {" "}
          <Image
            src="/loading.png"
            alt="dashboard"
            width={400}
            height={300}
            className="border-2 border-blue-500 rounded-lg cursor-pointer hover:border-blue-700"
          />
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          3
        </div>
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Wait for the process</p>
          <p className="text-base">
            Devscribe will take a little time for fresh uploads to process
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-11/12 justify-between  relative ">
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Get automated generated notes and concepts</p>
          <p className="text-base">
            Play around with the chat interface of Devscribe, which will enable
            you to get all your doubts resolved.
          </p>
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          4
        </div>
        <div className="absolute bottom-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          🤗
        </div>
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {" "}
          <Image
            src="/chat.png"
            alt="dashboard"
            width={400}
            height={300}
            className="border-2 border-blue-500 rounded-lg cursor-pointer hover:border-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default How;
