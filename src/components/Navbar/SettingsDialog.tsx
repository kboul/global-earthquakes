import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useShallow } from "zustand/react/shallow";

import { ResponsiveDialog } from "../ui/ResponsiveDialog";
import { Select } from "../ui/Select";
import { Input } from "../ui/Input";
import { Tabs } from "../ui/Tabs";
import { cn } from "../../utils";
import { days } from "../../constants";
import { Label } from "../ui/Label";
import { useStore } from "../../hooks";
import { convertDaysDropdownValue } from "../../utils";
import { initialNumOfDays, initialStartTime } from "../../constants";

// types
type SelectedTab = "days" | "timePeriod";

// constants
const tabMapping: Record<SelectedTab, string> = {
  days: "number of days",
  timePeriod: "time period"
};

export default function SettingsDialog() {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("days");

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

  const handleChange = (value: string) => {
    setNumOfDays(value);
    setStartTime(convertDaysDropdownValue(value));
  };

  const handleDateSelectionsChange = (value: string) => {
    setSelectedTab(value as SelectedTab);
  };

  return (
    <ResponsiveDialog
      open={settingsOpen}
      onOpenChange={(open) => setStore({ settingsOpen: open })}
      title={`Search by ${tabMapping[selectedTab]}`}
      Trigger={
        <div title="Settings">
          <Cog6ToothIcon
            className={cn("w-7 h-7 text-white", settingsOpen && "text-[#0ff]")}
            title="Settings"
          />
        </div>
      }>
      <Tabs
        value={selectedTab}
        onValueChange={handleDateSelectionsChange}
        triggers={[
          { value: "days", content: "Days" },
          { value: "timePeriod", content: "Time period" }
        ]}
        contents={[
          {
            value: "days",
            content: (
              <>
                <Label>Number of days</Label>
                <Select
                  onValueChange={handleChange}
                  options={days}
                  placeholder="Days"
                  value={numOfDays}
                />
              </>
            )
          },
          {
            value: "timePeriod",
            content: (
              <>
                <Label>Time period</Label>
                <div className="flex gap-x-4">
                  <Input
                    type="date"
                    onChange={(e) => setStartTime(e.target.value)}
                    value={startTime}
                  />
                  <Input
                    type="date"
                    onChange={(e) => setEndTime(e.target.value)}
                    value={endTime}
                  />
                </div>
              </>
            )
          }
        ]}
      />
    </ResponsiveDialog>
  );
}
