import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState<string>('// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    // Fokusni ta’minlash
    editor.focus();
    // Ctrl+A uchun maxsus buyruq
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

  return (
    <Editor
      height="calc(100vh - 60px)"
      width="100%"
      language="javascript"
      value={code}
      onChange={handleEditorChange}
      theme="vs-dark"
      onMount={handleEditorDidMount}
      options={{
        minimap: { enabled: false },
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        readOnly: false, // Tahrirlash mumkin
        domReadOnly: false, // DOM’da o‘qish rejimi o‘chirilgan
        contextmenu: true, // O‘ng sichqoncha menyusi
        selectOnLineNumbers: true, // Qator raqamlari orqali tanlash
        wordWrap: 'on', // So‘z o‘ramini yoqish
        lineNumbers: 'on', // Qator raqamlari ko‘rsatiladi
        renderLineHighlight: 'all', // Tanlangan qatorlarni belgilash
        selectionHighlight: true, // Tanlangan so‘zlarni highlight qilish
        quickSuggestions: true, // Takliflar yoqilgan
        acceptSuggestionOnEnter: 'on', // Enter bilan takliflarni qabul qilish
        accessibilitySupport: 'auto', // Klaviatura hodisalari uchun qo‘llab-quvvatlash
        mouseWheelZoom: false, // Sichqoncha bilan zoom’ni o‘chirish
        tabSize: 2, // Tab o‘lchami
        formatOnPaste: true, // Qo‘yishda formatlash
        formatOnType: true, // Yozishda formatlash
      }}
    />
  );
};

export default CodeEditor;