import { FaGear } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between p-3">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Global Earthquakes
        </span>

        <FaGear className="dark:text-white cursor-pointer" size="20" />
      </div>
    </nav>
  );
}
