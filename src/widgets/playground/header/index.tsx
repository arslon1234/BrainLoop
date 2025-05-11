import { Avatar, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaCaretRight, FaChevronLeft, FaChevronRight, FaRandom } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import { useCodeStore } from "../../../store/codeStore";
import "@ant-design/v5-patch-for-react-19";
import { useEffect, useRef } from "react";

// Message uchun tip aniqlash
interface Message {
  language: string;
  code: string;
}

const Header = () => {
  const { code, language, setResult } = useCodeStore();
  // const [result, setResult] = useState<string>(""); // Natija uchun holat
  const wsRef = useRef<WebSocket | null>(null);
  // console.log(result)
  useEffect(() => {
    const ws = new WebSocket("wss://compile.prodonik.uz/api/v1/execute");
    wsRef.current = ws;

    // Aloqa ochilganda
    ws.onopen = () => {
      console.log("WebSocket aloqasi ochildi");
    };

    // Serverdan xabar kelganda
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data); // Serverdan kelgan JSON ma'lumot
      console.log(data)
      setResult(data.output || data.error); // Natijani yoki xatoni ko‘rsatamiz
    };

    // Xato yuz berganda
    ws.onerror = (error) => {
      console.error("WebSocket xatosi:", error);
    };

    // Aloqa yopilganda
    ws.onclose = () => {
      console.log("WebSocket aloqasi yopildi");
    };

    // Komponent o‘chirilganda aloqani yopamiz
    return () => {
      ws.close();
    };
  }, []);

  const handleRunCode = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const message: Message = {
        language, // useCodeStore'dan dinamik til
        code, // useCodeStore'dan dinamik kod
      };
      wsRef.current.send(JSON.stringify(message)); // JSON formatida yuboramiz
    } else {
      console.error("WebSocket aloqasi ochiq emas");
    }
  };

  return (
    <div className="h-[40px] p-4 flex items-center justify-between">
      <div>
        <Space.Compact className="flex gap-0.5">
          <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
            <FaChevronLeft className="text-[16px] text-[#a9a8a8]" />
          </Button>
          <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
            <FaChevronRight className="text-[16px] text-[#a9a8a8]" />
          </Button>
          <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
            <FaRandom className="text-[16px] text-[#a9a8a8]" />
          </Button>
        </Space.Compact>
      </div>
      <div>
        <Space.Compact className="flex gap-1">
          <Button
            onClick={handleRunCode}
            className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]"
          >
            <FaCaretRight className="text-[18px] text-[#a9a8a8]" />
            <span className="text-[16px]">Run</span>
          </Button>
          <Button className="!bg-[#222222] !text-white !border-none hover:!bg-[var(--primary-dark)]">
            <MdCloudUpload style={{ color: "var(--primary-green)" }} className="text-[18px]" />
            <span className="text-[16px] text-[var(--primary-green)]">Submit</span>
          </Button>
        </Space.Compact>
      </div>
      <div>
        <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default Header;