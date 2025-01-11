import { useRef } from "react";
import { Calendar } from "lucide-react";

import { AppInput } from "./AppInput";
import { AppLabel } from "./AppLabel";

type AppDateInputProps = {
  label?: string;
} & React.ComponentPropsWithoutRef<"input">;

export function AppDateInput({ label = "", ...props }: AppDateInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Opens the native date picker
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <AppLabel>{label}</AppLabel>
      <div className="relative w-full ">
        <AppInput
          className="w-full pr-10" // Add padding-right to leave space for the icon
          ref={inputRef}
          type="date"
          {...props}
        />

        <div
          className="absolute inset-y-0 right-3 flex items-center"
          onClick={handleIconClick}>
          <Calendar className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
