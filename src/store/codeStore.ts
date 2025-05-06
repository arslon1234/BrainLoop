import { create } from "zustand";

interface CodeState {
    code: string;
    language: string;
    setCode: (code: string) => void;
    setLanguage: (language: string) => void;
}

export const useCodeStore = create<CodeState>((set) => ({
    code: '// Bu yerda kod yozing\nconsole.log("Salom, dunyo!");',
    language: 'javascript',
    setCode: (code) => set({ code }),
    setLanguage: (language) => set({ language }),
  }));