import { useState } from "react";
import { Layers } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../../components/ui/popover";
import { RadioGroup } from "../../components/ui/RadioGroup";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { useStore } from "../../hooks";
import { tileLayers } from "../../constants";

export default function TileLayers() {
  const [isOpen, setIsOpen] = useState(false);

  const { selectedTileLayer, tectonicPlatesOn, setStore } = useStore(
    useShallow((state) => ({
      selectedTileLayer: state.selectedTileLayer,
      tectonicPlatesOn: state.tectonicPlatesOn,
      setStore: state.setStore
    }))
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        className="absolute top-14 right-3 z-[1000] bg-white dark:bg-gray-800 p-2 rounded-full shadow-md cursor-pointer focus:outline-none"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <Layers />
      </PopoverTrigger>
      <PopoverContent
        className="z-[1000]"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <RadioGroup
          value={selectedTileLayer}
          onValueChange={(value) => setStore({ selectedTileLayer: value })}
          options={tileLayers.map((layer) => ({
            value: layer.name,
            label: layer.name
          }))}
        />

        <hr className="my-4" />

        <div className="flex items-center space-x-2">
          <Checkbox
            checked={tectonicPlatesOn}
            onCheckedChange={(checked) =>
              setStore({ tectonicPlatesOn: checked })
            }
          />
          <Label>Tectonic Plates</Label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
