import React from "react";
import { useSearchParams } from "react-router-dom";

import {
  AppInput,
  AppModal,
  AppSelect,
  DateSelections,
  Map
} from "../components";
import { useSearchParam, useStore } from "../hooks";
import { days, initialNumOfDays, initialStartTime } from "../constants";
import { convertDropdownValue } from "../utils";

export default function HomePage() {
  const [, setSearchParams] = useSearchParams();
  const [settings] = useSearchParam("settings");

  const numOfDays = useStore((state) => state.numOfDays);
  const setNumOfDays = useStore((state) => state.setNumOfDays);
  const startTime = useStore((state) => state.startTime);
  const setStartTime = useStore((state) => state.setStartTime);
  const endTime = useStore((state) => state.endTime);
  const setEndTime = useStore((state) => state.setEndTime);

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
      {settings && (
        <AppModal onClose={() => setSearchParams()} title="Search by date">
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
    </>
  );
}
