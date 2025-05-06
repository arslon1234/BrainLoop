import { useState } from 'react';
import { Tooltip, Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CgFormatLeft } from "react-icons/cg";
import { RiResetLeftLine, RiCheckLine } from "react-icons/ri";
import './header.css';
interface CodeEditorHeaderProps {
    onLanguageChange: (language: string) => void;
    onFormatCode: () => void;
}
const CodeEditorHeader = ({ onLanguageChange, onFormatCode }: CodeEditorHeaderProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');
  const [isFormatted, setIsFormatted] = useState(false);
  const items: MenuProps['items'] = [
    { key: 'javascript', label: 'JavaScript' },
    { key: 'python', label: 'Python' },
    { key: 'java', label: 'Java' },
    { key: 'cpp', label: 'C++' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'ruby', label: 'Ruby' },
    { key: 'go', label: 'Go' },
    { key: 'rust', label: 'Rust' },
    { key: 'php', label: 'PHP' },
    { key: 'csharp', label: 'C#' },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    const selectedItem = items.find(item => item && 'key' in item && item.key === key);
    setSelectedLanguage((selectedItem as { label: string } | undefined)?.label || 'JavaScript');
    onLanguageChange(key);
  };
  const handleFormatClick = () => {
    onFormatCode();
    setIsFormatted(true);
    setTimeout(() => {
      setIsFormatted(false);
    }, 1000); // 1 soniya
  };
  return (
    <div className="p-2 bg-transparent w-full rounded-tl-lg rounded-tr-lg flex justify-between items-center border-b-[0.9px] border-[var(--primary-dark)]">
      <div>
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        trigger={['click']}
        overlayClassName="custom-dropdown"
      >
        <button className="custom-dropdown-button text-[#ccc] hover:bg-[var(--primary-dark)] flex items-center gap-1 cursor-pointer px-3 py-1 rounded-md">
          {selectedLanguage} <DownOutlined className='text-[12px]'/>
        </button>
      </Dropdown>
      </div>
      <div className='flex gap-2'>
        <Tooltip title="Format Code" placement='top'>
        <button onClick={isFormatted ? undefined : handleFormatClick} disabled={isFormatted} className='cursor-pointer hover:bg-[var(--primary-dark)] p-1 rounded-[4px]'>
        {isFormatted ? (
              <RiCheckLine className='text-[17px] text-[var(--primary-green)]' />
            ) : (
              <CgFormatLeft className='text-[17px] text-[#999]' />
            )}
        </button>
        </Tooltip>
        <Tooltip title="Reset to default code definition" placement='top'>
        <button className='cursor-pointer hover:bg-[var(--primary-dark)] p-1 rounded-[4px]'>
        <RiResetLeftLine className='text-[17px] text-[#999]'/>
        </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default CodeEditorHeader;