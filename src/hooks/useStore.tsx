import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CheckedState } from "@radix-ui/react-checkbox";

import { initialNumOfDays, initialStartTime, tileLayers } from "../constants";
import { getLocalStorageState } from "../utils";

export type SelectedTab = "days" | "timePeriod";

interface Store {
  selectedTileLayer: string;
  settingsOpen: boolean;
  tectonicPlatesOn: CheckedState;
  startTime: string;
  endTime: string;
  numOfDays: string;
  selectedTab: SelectedTab;
  setStore: (newPair: Partial<Store>) => void;
}

const localStorageName = "global-earthquakes-store";
const localStorageState = getLocalStorageState(localStorageName)?.state;

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        selectedTileLayer: tileLayers[1].name,
        settingsOpen: false,
        startTime: localStorageState?.startTime ?? initialStartTime,
        tectonicPlatesOn: false,
        endTime: localStorageState?.endTime ?? "",
        numOfDays: localStorageState?.numOfDays ?? initialNumOfDays,
        selectedTab: "days",
        setStore: (newPair) => set((state) => ({ ...state, ...newPair }))
      }),
      {
        name: localStorageName,
        partialize: (state) => ({
          selectedTileLayer: state.selectedTileLayer,
          settingsOpen: state.settingsOpen,
          tectonicPlatesOn: state.tectonicPlatesOn,
          numOfDays: state.numOfDays,
          startTime: state.startTime,
          endTime: state.endTime,
          selectedTab: state.selectedTab
        })
      }
    )
  )
);

export default useStore;
