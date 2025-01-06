import { useRef } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useShallow } from "zustand/react/shallow";

import { ResponsiveDialog } from "../ui/ResponsiveDialog";
import { Select } from "../ui/Select";
import { Tabs } from "../ui/Tabs";
import { DateInput } from "../ui/DateInput";
import { Label } from "../ui/Label";
import { useStore } from "../../hooks";
import { SelectedTab } from "../../hooks/useStore";
import { cn } from "../../utils";
import { days } from "../../constants";

// constants
const tabMapping: Record<SelectedTab, string> = {
  days: "number of days",
  timePeriod: "time period"
};

export default function SettingsDialog() {
  const { settingsOpen, numOfDays, startTime, endTime, selectedTab, setStore } =
    useStore(
      useShallow((state) => ({
        settingsOpen: state.settingsOpen,
        numOfDays: state.numOfDays,
        startTime: state.startTime,
        endTime: state.endTime,
        selectedTab: state.selectedTab,
        setStore: state.setStore
      }))
    );

  const handleChange = (value: string) => setStore({ numOfDays: value });

  const handleDateSelectionsChange = (value: string) => {
    setStore({ selectedTab: value as SelectedTab });
  };

  const inputRef = useRef<any>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Opens the native date picker
    }
  };

  return (
    <ResponsiveDialog
      contentProps={{ className: "z-[1000]" }}
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
              <div className="flex flex-col gap-2">
                <Label>Number of days</Label>
                <Select
                  contentProps={{ className: "z-[1000]" }}
                  onValueChange={handleChange}
                  options={days}
                  placeholder="Days"
                  value={numOfDays}
                />
              </div>
            )
          },
          {
            value: "timePeriod",
            content: (
              <div className="flex gap-x-4">
                <DateInput
                  label="Start time"
                  onChange={(e) => setStore({ startTime: e.target.value })}
                  value={startTime}
                />
                <DateInput
                  label="End time"
                  type="date"
                  onChange={(e) => setStore({ endTime: e.target.value })}
                  value={endTime}
                />
              </div>
            )
          }
        ]}
      />
    </ResponsiveDialog>
  );
}
