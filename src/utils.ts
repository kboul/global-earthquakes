import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getLocalStorageState = (localStorageName: string) => {
  const savedState = localStorage.getItem(localStorageName);
  if (savedState) return JSON.parse(savedState);
  return null;
};

export { cn, getLocalStorageState };
