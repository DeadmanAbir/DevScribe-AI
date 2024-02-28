import Question from "./question-section";
import Tabs from "./tabs";
import {
  MainScreenProps,
  KeyConceptProps,
  Message,
} from "@/types/chat/chat-types";
const MainScreen = ({
  url,
  detailedSummary,
  concepts,
  title,
  description,
  id,
  collection,
}: MainScreenProps) => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-7/12  hidden md:block ">
        <Tabs
          url={url}
          detailedSummary={detailedSummary}
          concepts={concepts}
          title={title}
          description={description}
        />
      </div>
      <div className="bg-gradient-to-r w-[2px] from-blue-500 to-blue-600 hidden md:block"></div>
      <Question id={id} collection={collection} />
    </div>
  );
};

export default MainScreen;
