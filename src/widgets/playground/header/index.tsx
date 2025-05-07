import { Button, Space } from "antd"
import { FaCaretRight } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useCodeStore } from "../../../store/codeStore";
import '@ant-design/v5-patch-for-react-19';
const Header = () => {
  const {code, language} = useCodeStore()
  const handleRunCode =()=>{
    console.log(code, language)
  }
  return (
    <div className="h-[40px] p-4 flex items-center justify-between">
        <div>
          <Space.Compact>
            <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <FaChevronLeft className="text-[16px] text-[#a9a8a8]"/>
            </Button>
            <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <FaChevronRight className="text-[16px] text-[#a9a8a8]"/>
            </Button>
          </Space.Compact>
        </div>
        <div>
          <Space.Compact className="flex gap-1">
            <Button onClick={handleRunCode} className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <FaCaretRight className="text-[18px] text-[#a9a8a8]"/>
              <span className="text-[16px]">Run</span>
              </Button>
            <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <MdCloudUpload style={{color: '#2ac245'}} className="text-[18px] text-[var(--primary-green)]"/>
              <span className="text-[16px] text-[var(--primary-green)]">Submit</span>
            </Button>
          </Space.Compact>
        </div>
        <div>
          <h1>Profile settings</h1>
        </div>
    </div>
  )
}

export default Header
