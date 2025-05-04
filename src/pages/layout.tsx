import React, { useState } from 'react';
import { Flex, Splitter, Typography, Button } from 'antd';
import Editor from '@monaco-editor/react';
// import './Layout.css';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

const Layout: React.FC = () => {
  const [code, setCode] = useState<string>('// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");');
  const [output, setOutput] = useState<string>('');

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = () => {
    setOutput('');
    try {
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalConsoleLog(...args);
      };

      eval(code);

      setOutput(logs.join('\n') || 'Natija yo\'q');
      console.log = originalConsoleLog;
    } catch (error) {
      setOutput('Xato: ' + (error as Error).message);
    }
  };

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
            <div className='bg-[#1e1e1e] flex flex-col justify-center items-center gap-2 w-full h-full rounded-2xl'>
            <Editor
              height="90%"
              width="98%"
              language="javascript"
              value={code}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                roundedSelection: true
              }}
            />
            <div className='mt-2'>
            <Button type="primary" onClick={handleRunCode}>
              Kodni ishga tushirish
            </Button>
            </div>
            </div>
          </Splitter.Panel>
          <Splitter.Panel defaultSize={27}>
            <Typography.Title level={5}>Natija:</Typography.Title>
            <pre>{output}</pre>
          </Splitter.Panel>
        </Splitter>
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Left" />
      </Splitter.Panel>
     
    </Splitter>
  );
};

export default Layout;