import { Tabs } from 'antd';
import { useState } from 'react';

const { TabPane } = Tabs;

const QuestionHeader = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="p-3 bg-transparent w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center border-b-[0.9px] border-[var(--primary-dark)]">
      <Tabs
        defaultActiveKey="description"
        onChange={handleTabChange}
        className="w-full"
        tabBarStyle={{ color: 'var(--primary-light)', borderBottom: 'none' }}
        tabBarGutter={16}
        activeKey={activeTab}
      >
        <TabPane
          tab={
            <span className={`text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors ${activeTab === 'description' ? 'border-b-2 border-[var(--primary)]' : ''}`}>
              Description
            </span>
          }
          key="description"
        >
          <div className="text-[var(--primary-light)]">Description content goes here</div>
        </TabPane>
        <TabPane
          tab={
            <span className={`text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors ${activeTab === 'editorial' ? 'border-b-2 border-[var(--primary)]' : ''}`}>
              Editorial
            </span>
          }
          key="editorial"
        >
          <div className="text-[var(--primary-light)]">Editorial content goes here</div>
        </TabPane>
        <TabPane
          tab={
            <span className={`text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors ${activeTab === 'solutions' ? 'border-b-2 border-[var(--primary)]' : ''}`}>
              Solutions
            </span>
          }
          key="solutions"
        >
          <div className="text-[var(--primary-light)]">Solutions content goes here</div>
        </TabPane>
        <TabPane
          tab={
            <span className={`text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors ${activeTab === 'submission' ? 'border-b-2 border-[var(--primary)]' : ''}`}>
              Submission
            </span>
          }
          key="submission"
        >
          <div className="text-[var(--primary-light)]">Submission content goes here</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default QuestionHeader;