import React from "react";
import { useSearchParams } from "react-router-dom";

import { AppModal, AppSelect, Map } from "../components";
import { useSearchParam, useStore } from "../hooks";

const days = [
  { value: "1 day", label: "1 day" },
  { value: "3 days", label: "3 days" },
  { value: "10 days", label: "10 days" },
  { value: "20 days", label: "20 days" },
  { value: "30 days", label: "30 days" }
];

const convertDropdownValue = (dropdownValue: string): string => {
  const now = "NOW - ";
  switch (dropdownValue) {
    case "1 day":
      return `${now}1day`;
    case "3 days":
      return `${now}3days`;
    case "10 days":
      return `${now}10days`;
    case "20 days":
      return `${now}20days`;
    case "30 days":
      return `${now}30days`;
    default:
      return `${now}3days`;
  }
};

export default function HomePage() {
  const [, setSearchParams] = useSearchParams();
  const [settings] = useSearchParam("settings");

  const numOfDays = useStore((state) => state.numOfDays);
  const setNumOfDays = useStore((state) => state.setNumOfDays);
  const setStartTime = useStore((state) => state.setStartTime);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dropdownValue = e.target.value;
    setNumOfDays(dropdownValue);
    setStartTime(convertDropdownValue(dropdownValue));
  };

  return (
    <>
      {settings && (
        <AppModal onClose={() => setSearchParams()} title="Search by date">
          <AppSelect
            label="Days"
            onChange={handleChange}
            options={days}
            value={numOfDays}
          />
        </AppModal>
      )}

      <Map />
    </>
  );
}
