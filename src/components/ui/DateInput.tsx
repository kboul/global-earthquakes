import { useRef } from "react";
import { Calendar } from "lucide-react";

import { Input } from "./Input";
import { Label } from "./Label";

type DateInputProps = {
  label?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function DateInput({ label = "", ...props }: DateInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Opens the native date picker
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <Label>{label}</Label>
      <div className="relative w-full ">
        <Input
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
