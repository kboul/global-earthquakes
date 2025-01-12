import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CheckedState } from "@radix-ui/react-checkbox";

import { colorPalettes, initialNumOfDays, tileLayers } from "../constants";
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
  magnitudePaletteOpen: boolean;
  magnitudePalette: string;
  setStore: (newPair: Partial<Store>) => void;
}

const localStorageName = "global-earthquakes-store";
const localStorageState = getLocalStorageState(localStorageName)?.state;

const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        endTime: localStorageState?.endTime ?? "",
        magnitudePalette: Object.keys(colorPalettes)[0],
        magnitudePaletteOpen: false,
        numOfDays: localStorageState?.numOfDays ?? initialNumOfDays,
        selectedTab: "days",
        selectedTileLayer: tileLayers[1].name,
        settingsOpen: false,
        startTime: localStorageState?.startTime ?? "",
        tectonicPlatesOn: false,
        setStore: (newPair) => set((state) => ({ ...state, ...newPair }))
      }),
      {
        name: localStorageName,
        partialize: (state) => ({
          endTime: state.endTime,
          magnitudePalette: state.magnitudePalette,
          magnitudePaletteOpen: state.magnitudePaletteOpen,
          numOfDays: state.numOfDays,
          selectedTab: state.selectedTab,
          selectedTileLayer: state.selectedTileLayer,
          settingsOpen: state.settingsOpen,
          startTime: state.startTime,
          tectonicPlatesOn: state.tectonicPlatesOn
        })
      }
    )
  )
);

export default useStore;
