import { useState } from 'react';
import { Tooltip, Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CgFormatLeft } from "react-icons/cg";
import './header.css';

const CodeEditorHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const items: MenuProps['items'] = [
    { key: 'JavaScript', label: 'JavaScript' },
    { key: 'Python', label: 'Python' },
    { key: 'Java', label: 'Java' },
    { key: 'C++', label: 'C++' },
    { key: 'TypeScript', label: 'TypeScript' },
    { key: 'Ruby', label: 'Ruby' },
    { key: 'Go', label: 'Go' },
    { key: 'Rust', label: 'Rust' },
    { key: 'PHP', label: 'PHP' },
    { key: 'C#', label: 'C#' },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    setSelectedLanguage(key);
  };

  return (
    <div className="p-2 bg-transparent w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center border-b-[0.9px] border-[#333]">
      <div>
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
      <div>
        <Tooltip title="Format Code" placement='top'>
        <button className='cursor-pointer hover:bg-[#333] p-1 rounded-[4px]'>
        <CgFormatLeft className='text-[17px] text-[#999]'/>
        </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default CodeEditorHeader;