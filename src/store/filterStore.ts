import { create } from "zustand";

type Filter = 'all' | 'completed' | 'incomplete';
interface FilterState {
    filter: Filter;
    setFilter: (filter: Filter) => void
}

export const useFilterStore = create<FilterState>((set) => ({
    filter: 'all',
    setFilter: (filter) => set({ filter }),
}))