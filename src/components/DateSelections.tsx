import React from "react";

type DateSectionsProps = {
  selectedRadio: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DateSelections({
  selectedRadio,
  onChange
}: DateSectionsProps) {
  return (
    <div className="flex">
      <div className="flex items-center me-4">
        <input
          defaultChecked={selectedRadio === "days"}
          id="inline-radio"
          type="radio"
          value="days"
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={onChange}
        />
        <label
          htmlFor="inline-radio"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Days
        </label>
      </div>
      <div className="flex items-center me-4">
        <input
          defaultChecked={selectedRadio === "timePeriod"}
          id="inline-radio"
          type="radio"
          value="timePeriod"
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={onChange}
        />
        <label
          htmlFor="inline-radio"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Time period
        </label>
      </div>
    </div>
  );
}
