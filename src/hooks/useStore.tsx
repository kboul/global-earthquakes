import create from 'zustand';

interface Store {
  startTime: string;
  endTime: string;
  numOfDays: string;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setNumOfDays: (numOfDays: string) => void;
}

const useStore = create<Store>((set) => ({
  startTime: 'NOW - 3days',
  endTime: '',
  numOfDays: '3 days',
  setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
  setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
  setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays }))
}));

export default useStore;
