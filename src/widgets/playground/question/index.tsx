import { useState } from "react";
import QuestionHeader from "./header";
interface TabItem {
  key: string;
  label: string;
  content: string;
}
const Question = () => {
  const [activeTab, setActiveTab] = useState("description");
  const tabs: TabItem[] = [
    {
      key: "description",
      label: "Description",
      content: "Description content goes here",
    },
    {
      key: "editorial",
      label: "Editorial",
      content: "Editorial content goes here",
    },
    {
      key: "solutions",
      label: "Solutions",
      content: "Solutions content goes here",
    },
    {
      key: "submission",
      label: "Submission",
      content: "Submission content goes here",
    },
  ];
  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };
  return (
    <div className="w-full h-[calc(100vh-40px)] bg-[var(--primary-gray)] rounded-[8px]">
      <QuestionHeader
        tabs={tabs}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <div className="text-[var(--secondary-light)] p-3">
        {tabs.find((item) => item.key === activeTab)?.content}
      </div>
    </div>
  );
};

export default Question;
