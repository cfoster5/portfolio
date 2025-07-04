import Link from "next/link";
import { Calendar } from "lucide-react";
import PtoPacerClient from "./components/PtoPacerClient";

export default function Page() {
  // Server-only layout; interactive logic in client component

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Link
        href="https://ko-fi.com/cfoster"
        className="fixed right-20 top-4 text-sm text-gray-800 transition-all duration-200 hover:bg-white/90 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800/90"
        aria-label="Support me on Ko-fi"
      >
        Tip Jar
      </Link>
      {/* Client-only interactive component */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white">
              <Calendar className="h-8 w-8" />
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
              PTO Pacer
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Track your time-off usage throughout the year. Upload your PTO data
            and visualize your vacation patterns.
          </p>
        </div>

        {/* Interactive PTO Pacer */}
        <PtoPacerClient />
      </div>
    </div>
  );
}
