import Question from "./question-section";
import Tabs from "./tabs";
interface MainScreenProps {
  url: string;
  detailedSummary: string;
  concepts: KeyConceptProps[];
  title: string;
}
type KeyConceptProps = {
  concept: string;
  explanation: string;
  header: string;
};
const MainScreen = ({ url, detailedSummary, concepts, title }: MainScreenProps) => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="w-7/12  hidden md:block ">
        <Tabs url={url} detailedSummary={detailedSummary} concepts={concepts} title={title} />
      </div>
      <div className="bg-gradient-to-r w-[3px] from-blue-500 to-green-400 hidden md:block"></div>
      <Question />
    </div>
  );
};

export default MainScreen;
