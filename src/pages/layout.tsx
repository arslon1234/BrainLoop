import { Splitter } from 'antd';
import { CodeEditor, Question, Result } from '@widgets';

const Layout = () => {
  return (
    <Splitter
      className="flex gap-2 h-screen"
      style={{ height: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
         <Splitter.Panel>
        <Splitter
          className="flex flex-col gap-2"
          layout="vertical"
        >
          <Splitter.Panel defaultSize={73}>
            <div className='bg-[#262626] flex flex-col justify-center items-center gap-2 w-full h-full rounded-2xl'>
              <CodeEditor/>
            </div>
          </Splitter.Panel>
          <Splitter.Panel defaultSize={27}>
           <Result/>
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
      <Splitter.Panel>
       <Question/>
      </Splitter.Panel>
     
    </Splitter>
  );
};

export default Layout;