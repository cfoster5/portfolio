import { Calendar } from "lucide-react";
import Link from "next/link";

const CalendarIcon = () => (
  <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white">
    <Calendar />
  </div>
);

export const Navbar = () => (
  <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-white shadow-md dark:bg-gray-800">
    <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-full items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center gap-3 text-xl font-semibold text-neutral-800 transition hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-white"
        >
          <CalendarIcon />
          <h1>PTO Pacer</h1>
        </Link>
        <Link
          href="https://ko-fi.com/cfoster"
          className="min-h-[44] min-w-[44] content-center px-3 py-2 font-medium text-neutral-800 transition hover:text-indigo-600 dark:text-neutral-200 dark:hover:text-white"
          target="_blank"
        >
          Tip Jar
        </Link>
      </div>
    </div>
  </nav>
);
