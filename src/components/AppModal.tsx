import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  size?: Size;
  title: string;
}

const sizes = {
  sm: "relative w-auto my-6 mx-auto max-w-sm",
  md: "relative w-1/3 my-6 mx-auto max-w-3xl",
  lg: "w-full h-full"
};

export default function Modal({
  children,
  onClose,
  size = "md",
  title
}: ModalProps) {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
      <div className={sizes[size]}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
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
