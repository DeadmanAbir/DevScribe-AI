import {
  Notebook,
  NotebookPen,
  Youtube as Icon,
  Download,
  Check,
  Copy,
} from "lucide-react";
import React, { useState, useRef } from "react";
import Youtube from "./youtube-video";
import MySummary from "./my-summary";
import { TabsProps } from "@/types/chat/chat-types";
import Concepts from "./concepts";

const Tabs = ({ url, title, description, id }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    {
      title: "Home",
      icon: Icon,
      content: <Youtube URL={url} title={title} description={description} />,
    },
    { title: "Notes", icon: Notebook, content: "" },
    {
      title: "Key Concepts",
      icon: NotebookPen,
      content: "",
    },
  ];
  return (
    <div className="mt-8 p-2 ">
      <div className=" text-center  text-sm flex gap-[0.5px] items-center">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={`flex font-semibold items-center cursor-pointer rounded-t-2xl h-8 p-2 border-2 border-b-0 border-gray-400 ${
              activeTab === tab.title ? "bg-gray-300 border-none  " : ""
            }`}
            onClick={() => setActiveTab(tab.title)}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="max-h-screen overflow-y-auto p-3 border-t-2 border-gray-400  pb-36">
        {tabs.map(
          (tab) =>
            activeTab === tab.title && (
              <div key={tab.title}>
                {activeTab === "Home" ? (
                  <div>{tab.content as string}</div>
                ) : activeTab === "Key Concepts" ? (
                  <Concepts id={id} />
                ) : (
                  <MySummary id={id} />
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
