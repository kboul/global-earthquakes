import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { initialNumOfDays, initialStartTime } from "../constants";

interface Store {
  settingsOpen: boolean;
  startTime: string;
  endTime: string;
  numOfDays: string;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setNumOfDays: (numOfDays: string) => void;
  setStore: (newPair: Partial<Store>) => void;
}

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        settingsOpen: false,
        startTime: initialStartTime,
        endTime: "",
        numOfDays: initialNumOfDays,
        setStore: (newPair) => set((state) => ({ ...state, ...newPair })),
        setStartTime: (startTime) => set((state) => ({ ...state, startTime })),
        setEndTime: (endTime) => set((state) => ({ ...state, endTime })),
        setNumOfDays: (numOfDays) => set((state) => ({ ...state, numOfDays }))
      }),
      {
        name: "global-earthquakes-store",
        partialize: (state) => ({
          settingsOpen: state.settingsOpen
        })
      }
    )
  )
);

export default useStore;
