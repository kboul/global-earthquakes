import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";

import { setSearchParam } from "../utils";

export default function Navbar() {
  const [, setSearchParams] = useSearchParams();

  return (
    <nav className="bg-[#3d5e80] border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-2">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Global Earthquakes
        </span>

        <Cog6ToothIcon
          className="w-7 h-7 cursor-pointer text-white"
          onClick={() =>
            setSearchParams(setSearchParam("settings", String(true)))
          }
        />
      </div>
    </nav>
  );
}
