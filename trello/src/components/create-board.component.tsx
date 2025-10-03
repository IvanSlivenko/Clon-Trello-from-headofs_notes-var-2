import Link from "next/link";
import { Input } from "./input.component";

export function CreateBoard() {
  return (
    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        + Create a new board
      </h5>
      <Input />
    </div>
  );
}
