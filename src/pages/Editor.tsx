import { useState } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';

const CodeEditor = () => {
  const [code, setCode] = useState<string>('// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");');
  const [language, setLanguage] = useState<string>('javascript');
  const [output, setOutput] = useState<string>('');

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    setOutput(''); // Yangi til tanlanganda natijani tozalash
  };

  const handleRunCode = () => {
    setOutput('');
    if (language !== 'javascript') {
      setOutput('Faqat JavaScript kodi brauzerda ishga tushiriladi. Boshqa tillar uchun server kerak.');
      return;
    }

    try {
      // console.log'ni natija sifatida saqlash uchun o'zgartiramiz
      const originalConsoleLog = console.log;
      const logs: string[] = [];
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalConsoleLog(...args);
      };

      // Kodni ishga tushirish
      eval(code);

      // Natijalarni ko'rsatish
      setOutput(logs.join('\n') || 'Natija yo\'q');
      console.log = originalConsoleLog; // console.log'ni qayta tiklash
    } catch (error) {
      setOutput('Xato: ' + (error as Error).message);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <label htmlFor="language">Dasturlash tili: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
        <button onClick={handleRunCode}>Kodni ishga tushirish</button>
      </div>
      <Editor
        height="calc(100vh - 60px)"
        width="100%"
        language={language}
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
      <div className="output">
        <h3>Natija:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;