import Question from "./question-section";
import Tabs from "./tabs";
interface MainScreenProps {
  url: string;
  detailedSummary: string;
  concepts: KeyConceptProps[];
  title: string;
  description: string;
  id : string;
  collection : string;
}
type Message ={
  id: string;
  text: string;
  createdAt: Date;
  isUserMessage: boolean;

  fileId: string;
}
type KeyConceptProps = {
  concept: string;
  explanation: string;
  header: string;
};
const MainScreen = ({ url, detailedSummary, concepts, title, description, id, collection, messages }: MainScreenProps) => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-7/12  hidden md:block ">
        <Tabs url={url} detailedSummary={detailedSummary} concepts={concepts} title={title} description={description} />
      </div>
      <div className="bg-gradient-to-r w-[2px] from-blue-500 to-blue-600 hidden md:block"></div>
      <Question id={id} collection={collection}  />
    </div>
  );
};

export default MainScreen;
