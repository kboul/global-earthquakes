import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CheckedState } from "@radix-ui/react-checkbox";

import {
  colorPalettes,
  initialNumOfDays,
  searchBy,
  tileLayers
} from "../constants";
import { getLocalStorageState } from "../utils";
import { SearchByTab } from "../types";

interface Store {
  endTime: string;
  magnitudePaletteOpen: boolean;
  magnitudePalette: string;
  numOfDays: string;
  searchByTab: SearchByTab;
  settingsOpen: boolean;
  startTime: string;
  tectonicPlatesOn: CheckedState;
  tileLayer: string;
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
        searchByTab: searchBy.days,
        settingsOpen: false,
        startTime: localStorageState?.startTime ?? "",
        tectonicPlatesOn: false,
        tileLayer: tileLayers[1].name,
        setStore: (newPair) => set((state) => ({ ...state, ...newPair }))
      }),
      {
        name: localStorageName,
        partialize: (state) => ({
          endTime: state.endTime,
          magnitudePalette: state.magnitudePalette,
          magnitudePaletteOpen: state.magnitudePaletteOpen,
          numOfDays: state.numOfDays,
          searchByTab: state.searchByTab,
          settingsOpen: state.settingsOpen,
          startTime: state.startTime,
          tectonicPlatesOn: state.tectonicPlatesOn,
          tileLayer: state.tileLayer
        })
      }
    )
  )
);

export default useStore;
