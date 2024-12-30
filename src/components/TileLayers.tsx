import { useState } from "react";
import { Layers } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function TileLayers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className="absolute top-[120px] right-3 z-[1000] bg-white dark:bg-gray-800 p-2 rounded-full shadow-md cursor-pointer focus:outline-none"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Layers />
      </PopoverTrigger>
      <PopoverContent
        className="z-[1000]"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
}
