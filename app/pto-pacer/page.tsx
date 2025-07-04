import { Metadata } from "next";
import PtoPacerClient from "./components/PtoPacerClient";

export const metadata: Metadata = {
  title: "PTO Pacer - Track Your Time-Off Usage",
  description:
    "Stay on track with your vacation time. PTO Pacer helps you visualize and pace your PTO usage.",
  openGraph: {
    title: "PTO Pacer",
    description:
      "Stay on track with your vacation time. PTO Pacer helps you visualize and pace your PTO usage.",
    // images: ["/simply-water.png"],
  },
  // icons: {
  //   icon: "/simply-water.png",
  //   apple: "/simply-water.png",
  //   shortcut: "/simply-water.png",
  // },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-left ">
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
