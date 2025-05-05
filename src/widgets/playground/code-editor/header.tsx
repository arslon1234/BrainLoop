import { useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './header.css';

const CodeEditorHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const items: MenuProps['items'] = [
    { key: 'JavaScript', label: 'JavaScript' },
    { key: 'Python', label: 'Python' },
    { key: 'Java', label: 'Java' },
    { key: 'C++', label: 'C++' },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedLanguage(key);
  };

  return (
    <div className="p-2 bg-transparent w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center border-b-[0.9px] border-[#333]">
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        trigger={['click']}
        overlayClassName="custom-dropdown"
      >
        <button className="custom-dropdown-button text-[#ccc] hover:bg-[#333333] flex items-center gap-1 cursor-pointer px-3 py-1 rounded-md">
          {selectedLanguage} <DownOutlined className='text-[12px]'/>
        </button>
      </Dropdown>
    </div>
  );
};

export default CodeEditorHeader;