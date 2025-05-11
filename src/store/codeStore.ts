import { create } from "zustand";

interface CodeState {
    code: string;
    language: string;
    setCode: (code: string) => void;
    setLanguage: (language: string) => void;
    result: string,
    setResult: (result: string)=> void
}

export const useCodeStore = create<CodeState>((set) => ({
    code: '// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");',
    language: 'javascript',
    result: '',
    setCode: (code) => set({ code }),
    setResult: (result) => set({ result }),
    setLanguage: (language) => set({ language }),
  }));