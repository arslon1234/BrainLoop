import { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import CodeEditorHeader from './header';
import { useCodeStore } from '../../../store/codeStore';

const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const { code, setCode, language, setLanguage } = useCodeStore();

  const defaultCodes: { [key: string]: string } = {
    javascript: '// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");',
    python: '# Bu yerda kod yozing\nprint("Salom, dunyo!")',
    java: '// Bu yerda kod yozing\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Salom, dunyo!");\n  }\n}',
    cpp: '// Bu yerda kod yozing\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Salom, dunyo!" << endl;\n  return 0;\n}',
    typescript: '// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");',
    ruby: '# Bu yerda kod yozing\nputs "Salom, dunyo!"',
    go: '// Bu yerda kod yozing\npackage main\nimport "fmt"\nfunc main() {\n  fmt.Println("Salom, dunyo!")\n}',
    rust: '// Bu yerda kod yozing\nfn main() {\n  println!("Salom, dunyo!");\n}',
    php: '<?php\n// Bu yerda kod yozing\necho "Salom, dunyo!";\n?>',
    csharp: '// Bu yerda kod yozing\nusing System;\nclass Program {\n  static void Main(string[] args) {\n    Console.WriteLine("Salom, dunyo!");\n  }\n}',
  };

  const languageMap: { [key: string]: string } = {
    javascript: 'javascript',
    python: 'python',
    java: 'java',
    cpp: 'cpp',
    typescript: 'typescript',
    ruby: 'ruby',
    go: 'go',
    rust: 'rust',
    php: 'php',
    csharp: 'csharp',
  };

  // Sahifa yuklanganda yoki til o‘zgarganda localStorage’dan kodni olish
  useEffect(() => {
    const savedCode = localStorage.getItem(`code_${language}`);
    setCode(savedCode || defaultCodes[language] || '// Kod yozing');
  }, [language, setCode]);

  useEffect(() => {
    localStorage.setItem(`code_${language}`, code);
  }, [code, language]);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyA, () => {
      const model = editor.getModel();
      if (model) {
        const lineCount = model.getLineCount();
        const lastLineLength = model.getLineMaxColumn(lineCount);
        editor.setSelection(new monaco.Range(1, 1, lineCount, lastLineLength));
      }
      editor.focus();
    });
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const savedCode = localStorage.getItem(`code_${newLanguage}`);
    setCode(savedCode || defaultCodes[newLanguage] || '// Kod yozing');
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, languageMap[newLanguage] || newLanguage);
      }
    }
  };

  const handleFormatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  return (
    <>
      <CodeEditorHeader onLanguageChange={handleLanguageChange} onFormatCode={handleFormatCode} />
      <Editor
        height="calc(100vh - 60px)"
        width="100%"
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly: false,
          domReadOnly: false,
          contextmenu: true,
          selectOnLineNumbers: true,
          wordWrap: 'on',
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          selectionHighlight: true,
          quickSuggestions: true,
          acceptSuggestionOnEnter: 'on',
          accessibilitySupport: 'auto',
          mouseWheelZoom: false,
          tabSize: 2,
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </>
  );
};

export default CodeEditor;