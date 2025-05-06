interface TabItem {
  key: string;
  label: string;
  content: string;
}
interface HeaderType {
    tabs: TabItem[],
    handleTabClick: (key:string)=> void,
    activeTab: string
}
const QuestionHeader = ({tabs, handleTabClick, activeTab}:HeaderType) => {
  return (
    <div className="px-3 py-2 bg-[var(--primary-dark)] w-full rounded-tl-lg rounded-tr-lg border-b-[0.9px] border-[var(--primary-dark)]">
      <div className="flex gap-3">
        {tabs.map((item: TabItem) => (
          <button
            key={item.key}
            onClick={() => handleTabClick(item.key)}
            className={`text-[15px] py-1 px-2 rounded-[4px] cursor-pointer transition-colors ${
              activeTab === item.key
                ? 'text-[var(--primary-light)] hover:bg-[#474747]'
                : 'text-[var(--secondary-light)] hover:bg-[#474747]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default QuestionHeader;