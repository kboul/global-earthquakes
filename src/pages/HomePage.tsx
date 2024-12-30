import React from "react";
import { useShallow } from "zustand/react/shallow";

import {
  AppInput,
  AppModal,
  AppSelect,
  DateSelections,
  Map
} from "../components";
import TileLayers from "../components/TileLayers";
import { useStore } from "../hooks";
import { days, initialNumOfDays, initialStartTime } from "../constants";
import { convertDropdownValue } from "../utils";

export default function HomePage() {
  const {
    settingsOpen,
    numOfDays,
    setNumOfDays,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    setStore
  } = useStore(
    useShallow((state) => ({
      settingsOpen: state.settingsOpen,
      numOfDays: state.numOfDays,
      setNumOfDays: state.setNumOfDays,
      startTime: state.startTime,
      setStartTime: state.setStartTime,
      endTime: state.endTime,
      setEndTime: state.setEndTime,
      setStore: state.setStore
    }))
  );

  const [selectedRadio, setSelectedRadio] = React.useState("days");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dropdownValue = e.target.value;
    setNumOfDays(dropdownValue);
    setStartTime(convertDropdownValue(dropdownValue));
  };

  const handleDateSelectionsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setSelectedRadio(value);
    if (value === "days") {
      setNumOfDays(initialNumOfDays);
      setStartTime(initialStartTime);
      setEndTime("");
    }
    if (value === "timePeriod") {
      setNumOfDays(initialNumOfDays);
      setStartTime(convertDropdownValue(initialNumOfDays));
    }
  };

  return (
    <>
      {settingsOpen && (
        <AppModal
          onClose={() => setStore({ settingsOpen: false })}
          title="Search by date">
          <div className="flex flex-col gap-y-4">
            <DateSelections
              selectedRadio={selectedRadio}
              onChange={handleDateSelectionsChange}
            />

            <AppSelect
              disabled={selectedRadio === "timePeriod"}
              label="Days"
              onChange={handleChange}
              options={days}
              value={numOfDays}
            />

            <label
              className="block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="timePeriod">
              Time period
            </label>
            <div className="flex gap-x-4">
              <AppInput
                disabled={selectedRadio === "days"}
                type="date"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />
              <AppInput
                disabled={selectedRadio === "days"}
                type="date"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
              />
            </div>
          </div>
        </AppModal>
      )}

      <Map />
      <TileLayers />
    </>
  );
}
