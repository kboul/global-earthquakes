import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CheckedState } from "@radix-ui/react-checkbox";

import { initialNumOfDays, initialStartTime, tileLayers } from "../constants";

interface Store {
  selectedTileLayer: string;
  settingsOpen: boolean;
  tectonicPlatesOn: CheckedState;
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
        selectedTileLayer: tileLayers[1].name,
        settingsOpen: false,
        startTime: initialStartTime,
        tectonicPlatesOn: false,
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
          selectedTileLayer: state.selectedTileLayer,
          settingsOpen: state.settingsOpen,
          tectonicPlatesOn: state.tectonicPlatesOn
        })
      }
    )
  )
);

export default useStore;
