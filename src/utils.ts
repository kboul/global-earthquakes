import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { initialNumOfDays } from "./constants";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const convertDropdownValue = (dropdownValue: string): string => {
  const now = "NOW - ";
  switch (dropdownValue) {
    case "1 day":
      return `${now}1day`;
    case initialNumOfDays:
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

export { convertDropdownValue, cn };
