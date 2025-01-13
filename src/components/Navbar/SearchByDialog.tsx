import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useShallow } from "zustand/react/shallow";

import { AppResponsiveDialog } from "../ui/AppResponsiveDialog";
import { AppSelect } from "../ui/AppSelect";
import { AppTabs } from "../ui/AppTabs";
import { AppDateInput } from "../ui/AppDateInput";
import { AppLabel } from "../ui/AppLabel";
import { useStore } from "../../hooks";
import { SearchByTab } from "../../types";
import { cn } from "../../utils";
import { days, searchBy } from "../../constants";

// constants
const tabMapping: Record<SearchByTab, string> = {
  days: "number of days",
  timePeriod: "time period"
};

export default function SearchByDialog() {
  const { settingsOpen, numOfDays, startTime, endTime, searchByTab, setStore } =
    useStore(
      useShallow((state) => ({
        settingsOpen: state.settingsOpen,
        numOfDays: state.numOfDays,
        startTime: state.startTime,
        endTime: state.endTime,
        searchByTab: state.searchByTab,
        setStore: state.setStore
      }))
    );

  const handleChange = (value: string) => setStore({ numOfDays: value });

  const handleDateSelectionsChange = (value: string) => {
    setStore({ searchByTab: value as SearchByTab });
  };

  return (
    <AppResponsiveDialog
      contentProps={{ className: "z-[1000]" }}
      open={settingsOpen}
      onOpenChange={(open) => setStore({ settingsOpen: open })}
      title={`Search by ${tabMapping[searchByTab]}`}
      Trigger={
        <MagnifyingGlassIcon
          className={cn("w-7 h-7 text-white", settingsOpen && "text-aqua")}
          title="Search by date or time period"
        />
      }>
      <AppTabs
        value={searchByTab}
        onValueChange={handleDateSelectionsChange}
        triggers={[
          { value: "days", content: "Days" },
          { value: "timePeriod", content: "Time period" }
        ]}
        contents={[
          {
            value: searchBy.days,
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
            value: searchBy.timePeriod,
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
