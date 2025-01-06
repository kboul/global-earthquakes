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
        setStore: (newPair) => set((state) => ({ ...state, ...newPair }))
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
