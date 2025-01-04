import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

import { ResponsiveDialog } from "./ui/ResponsiveDialog";
import DateSelections from "./DateSelections";
import { Select } from "./ui/Select";
import AppInput from "./ui/AppInput";
import { useStore } from "../hooks";
import { convertDropdownValue } from "../utils";
import { days, initialNumOfDays, initialStartTime } from "../constants";

export default function Navbar() {
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

  const [selectedRadio, setSelectedRadio] = useState("days");

  const handleChange = (value: string) => {
    setNumOfDays(value);
    setStartTime(convertDropdownValue(value));
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
    <nav className="bg-[#3d5e80] border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-2">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Global Earthquakes
        </span>

        <ResponsiveDialog
          open={settingsOpen}
          onOpenChange={(open) => setStore({ settingsOpen: open })}
          title="Search by date"
          Trigger={
            <Cog6ToothIcon className="w-7 h-7 cursor-pointer text-white" />
          }>
          <div className="flex flex-col gap-y-4">
            <DateSelections
              selectedRadio={selectedRadio}
              onChange={handleDateSelectionsChange}
            />

            <label
              className="block text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="numberOfDays">
              Number of days
            </label>
            <Select
              disabled={selectedRadio === "timePeriod"}
              onValueChange={handleChange}
              options={days}
              placeholder="Days"
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
        </ResponsiveDialog>
      </div>
    </nav>
  );
}
