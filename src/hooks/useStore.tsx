import create from "zustand";
import { devtools } from "zustand/middleware";

import { initialNumOfDays, initialStartTime } from "../constants";

interface Store {
  startTime: string;
  endTime: string;
  numOfDays: string;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setNumOfDays: (numOfDays: string) => void;
}

const useStore = create<Store>()(
  devtools((set) => ({
    startTime: initialStartTime,
    endTime: "",
    numOfDays: initialNumOfDays,
    setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
    setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
    setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays }))
  }))
);

export default useStore;
