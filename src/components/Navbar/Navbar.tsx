import { GlobeAltIcon } from "@heroicons/react/24/outline";

import SettingsDialog from "./SettingsDialog";

export default function Navbar() {
  return (
    <nav className="bg-[#3d5e80] border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-2">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Global Earthquakes
        </span>

        <div className="flex gap-2 cursor-pointer">
          <GlobeAltIcon className="w-7 h-7 text-[#0ff]" title="Map" />
          <SettingsDialog />
        </div>
      </div>
    </nav>
  );
}
