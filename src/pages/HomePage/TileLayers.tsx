import { useState } from "react";
import { Layers } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { AppPopover } from "../../components/ui/AppPopover";
import { AppRadioGroup } from "../../components/ui/AppRadioGroup";
import { AppCheckbox } from "../../components/ui/AppCheckbox";
import { AppLabel } from "../../components/ui/AppLabel";
import { useStore } from "../../hooks";
import { tileLayers } from "../../constants";

export default function TileLayers() {
  const [isOpen, setIsOpen] = useState(false);

  const { tileLayer, tectonicPlatesOn, setStore } = useStore(
    useShallow((state) => ({
      tileLayer: state.tileLayer,
      tectonicPlatesOn: state.tectonicPlatesOn,
      setStore: state.setStore
    }))
  );

  return (
    <AppPopover
      open={isOpen}
      contentProps={{
        className: "z-[1000]",
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      }}
      triggerProps={{
        className:
          "absolute top-14 right-2 z-[1000] bg-white dark:bg-gray-800 p-2 rounded-full shadow-md cursor-pointer focus:outline-none",
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      }}
      Trigger={<Layers />}>
      <AppRadioGroup
        value={tileLayer}
        onValueChange={(value) => setStore({ tileLayer: value })}
        options={tileLayers.map((layer) => ({
          value: layer.name,
          label: layer.name
        }))}
      />
      <hr className="my-4" />

      <div className="flex items-center space-x-2">
        <AppCheckbox
          checked={tectonicPlatesOn}
          onCheckedChange={(checked) => setStore({ tectonicPlatesOn: checked })}
        />
        <AppLabel>Tectonic Plates</AppLabel>
      </div>
    </AppPopover>
  );
}
