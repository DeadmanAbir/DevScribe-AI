import { api } from "@/trpc/react";
import KeyConcepts from "./key-concepts";
import { FadeLoader } from "react-spinners";
import { KeyConceptProps } from "@/types/chat/chat-types";
import { useState } from "react";

const Concepts = ({ id }: { id: string }) => {
  const [error, setIsError] = useState<boolean>(false);
  const { data, isLoading } = api.file.getConcepts.useQuery(
    { fileId: id },
    {
      onError: (error) => {
        setIsError(true);
        console.error(error);
      },
    }
  );
  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-sky-400">Some error occured</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-sky-400">
          Generating the summary. This can take up to a minute.
        </p>
        <FadeLoader color="#2563EB" loading={true} />
      </div>
    );
  }
  return (
    <div className="mt-2 rounded-10  break-words">
      <div className="flex flex-col items-end ">
        <div className=" items-end justify-end  rounded-lg p-2 mb-2 text-right "></div>
        <div>
          <KeyConcepts concepts={data as KeyConceptProps[]} />
        </div>
      </div>
    </div>
  );
};

export default Concepts;
