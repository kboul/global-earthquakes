import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Size = "sm" | "def" | "lg" | "xxl";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  size?: Size;
  title: string;
}

const sizes = {
  sm: "max-w-md",
  def: "max-w-lg",
  lg: "max-w-4xl",
  xxl: "max-w-7xl"
};

export default function Modal({
  children,
  onClose,
  size = "def",
  title
}: ModalProps) {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
      {/* Modal content */}
      <div className={`relative w-full ${sizes[size]} max-h-full`}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <XMarkIcon
              aria-label="xMarkIcon"
              className="h-6 w-6 cursor-pointer text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
              onClick={onClose}
            />
          </div>
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
