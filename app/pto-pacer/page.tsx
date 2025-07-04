import PtoPacerClient from "./components/PtoPacerClient";

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
