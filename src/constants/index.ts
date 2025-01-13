import { SearchByTab } from "../types";

const initialNumOfDays = "3 days";

const days = [
  { value: "1 day", label: "1 day" },
  { value: initialNumOfDays, label: initialNumOfDays },
  { value: "10 days", label: "10 days" },
  { value: "20 days", label: "20 days" },
  { value: "30 days", label: "30 days" }
];

const searchBy: Record<string, SearchByTab> = {
  days: "days",
  timePeriod: "timePeriod"
};

export { initialNumOfDays, days, searchBy };
export * from "./colorPalettes";
export * from "./queryClient";
export * from "./tileLayers";
