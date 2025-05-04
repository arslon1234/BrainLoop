import { useState } from 'react';
import Editor from '@monaco-editor/react';
const CodeEditor = () => {
  const [code, setCode] = useState<string>('// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");');
  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  return (
    <>
      <Editor
        height="calc(100vh - 60px)"
        width="100%"
        language="javascript"
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </>
  );
};

export default CodeEditor;