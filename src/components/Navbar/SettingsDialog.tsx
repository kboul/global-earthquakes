import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useShallow } from "zustand/react/shallow";

import { AppResponsiveDialog } from "../ui/AppResponsiveDialog";
import { AppSelect } from "../ui/AppSelect";
import { AppTabs } from "../ui/AppTabs";
import { AppDateInput } from "../ui/AppDateInput";
import { AppLabel } from "../ui/AppLabel";
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

  return (
    <AppResponsiveDialog
      contentProps={{ className: "z-[1000]" }}
      open={settingsOpen}
      onOpenChange={(open) => setStore({ settingsOpen: open })}
      title={`Search by ${tabMapping[selectedTab]}`}
      Trigger={
        <div title="Settings">
          <Cog6ToothIcon
            className={cn("w-7 h-7 text-white", settingsOpen && "text-aqua")}
            title="Settings"
          />
        </div>
      }>
      <AppTabs
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
                <AppLabel>Number of days</AppLabel>
                <AppSelect
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
                <AppDateInput
                  label="Start time"
                  onChange={(e) => setStore({ startTime: e.target.value })}
                  value={startTime}
                />
                <AppDateInput
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
    </AppResponsiveDialog>
  );
}
