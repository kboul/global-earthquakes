import { SwatchIcon } from "@heroicons/react/24/outline";
import { useShallow } from "zustand/react/shallow";

import { AppResponsiveDialog } from "../ui/AppResponsiveDialog";
import { AppRadioGroup } from "../ui/AppRadioGroup";
import { useStore } from "../../hooks";
import { cn } from "../../utils";
import { colorPalette } from "../../constants";
import { AppLabel } from "../ui/AppLabel";
import { Label } from "@radix-ui/react-label";

export default function MagnitudePaletteDialog() {
  const { magnitudePaletteOpen, selectedPalette, setStore } = useStore(
    useShallow((state) => ({
      magnitudePaletteOpen: state.magnitudePaletteOpen,
      selectedPalette: state.selectedPalette,
      setStore: state.setStore
    }))
  );

  return (
    <AppResponsiveDialog
      contentProps={{ className: "z-[1000]" }}
      open={magnitudePaletteOpen}
      onOpenChange={(open) => setStore({ magnitudePaletteOpen: open })}
      title="Magnitude palette"
      Trigger={
        <SwatchIcon
          className={cn(
            "w-7 h-7 text-white",
            magnitudePaletteOpen && "text-aqua"
          )}
          title="Magnitute palette"
        />
      }>
      <div className="rounded-lg p-4 bg-white shadow-md">
        <p className="text-sm text-muted-foreground">
          Choose a color palette for the magnitude circles.
        </p>
        <hr className="my-2" />

        <AppRadioGroup
          value={selectedPalette}
          onValueChange={(value) => setStore({ selectedPalette: value })}
          options={Object.entries(colorPalette).map(([name, colors]) => ({
            value: name,
            label: (
              <div className="flex gap-1 items-center">
                {Object.values(colors).map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-5 h-5 rounded"
                  />
                ))}
                <AppLabel className="ml-2">{name}</AppLabel>
              </div>
            )
          }))}
        />
      </div>
    </AppResponsiveDialog>
  );
}
