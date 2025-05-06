import { Button } from "antd"
import ButtonGroup from "antd/es/button/button-group"
import { FaCaretRight } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
const Header = () => {
  return (
    <div className="h-[40px] p-4 flex items-center justify-between">
        <div>
          <h1>Start</h1>
        </div>
        <div>
          <ButtonGroup className="flex gap-1">
            <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <FaCaretRight className="text-[18px] text-[#a9a8a8]"/>
              <span className="text-[16px]">Run</span>
              </Button>
            <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
              <MdCloudUpload style={{color: '#2ac245'}} className="text-[18px] text-[var(--primary-green)]"/>
              <span className="text-[16px] text-[var(--primary-green)]">Submit</span>
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <h1>Profile settings</h1>
        </div>
    </div>
  )
}

export default Header
