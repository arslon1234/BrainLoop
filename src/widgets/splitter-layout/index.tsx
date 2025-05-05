import { Splitter } from 'antd';
// import { CodeEditor, Question, Result } from '@widgets';
import CodeEditor from '../playground/code-editor';
import Question from '../playground/question';
import Result from '../playground/testcase';

const Layout = () => {
  return (
    <Splitter
      className="flex gap-1 h-[calc(100vh-40px)]"
      style={{ height: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <Splitter.Panel>
        <Splitter
          className="flex flex-col gap-1"
          layout="vertical"
        >
          <Splitter.Panel defaultSize={70} className="overflow-hidden">
            <div className="code-editor-wrapper bg-[#262626] flex flex-col justify-center items-center gap-2 w-full h-full rounded-2xl">
              <CodeEditor />
            </div>
          </Splitter.Panel>
          <Splitter.Panel defaultSize={30} className="z-10">
            <Result />
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
      <Splitter.Panel>
        <Question />
      </Splitter.Panel>
    </Splitter>
  );
};

export default Layout;