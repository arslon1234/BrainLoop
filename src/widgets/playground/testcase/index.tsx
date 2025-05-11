import TestCaseHeader from "./header"
import { useCodeStore } from "../../../store/codeStore"
const Result = () => {
  const {result} = useCodeStore()
    return (
      <div className="bg-[var(--primary-gray)] w-full h-full rounded-[8px]">
        <TestCaseHeader/>
        <div>
          <h1 className="text-white">{result}</h1>
        </div>
      </div>
    )
  }
  
  export default Result
  