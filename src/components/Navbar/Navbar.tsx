import SearchByDialog from "./SearchByDialog";
import MagnitudePaletteDialog from "./MagnitudePaletteDialog";

export default function Navbar() {
  return (
    <nav className="bg-[#3d5e80] border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-2">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Global Earthquakes
        </span>

        <div className="flex gap-2 cursor-pointer">
          {/* <GlobeAltIcon className="w-7 h-7 text-aqua title="Map" /> */}
          {/* Cog6ToothIcon */}
          <SearchByDialog />
          <MagnitudePaletteDialog />
        </div>
      </div>
    </nav>
  );
}
