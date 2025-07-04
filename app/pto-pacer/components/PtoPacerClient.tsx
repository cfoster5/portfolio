"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { FileUpload } from "./FileUpload";
import { PTOChart } from "./PTOChart";
import { ThemeToggle } from "./ThemeToggle";
import { TrendingUp } from "lucide-react";
import { PTOData } from "../types";
import { parsePTOData } from "../utils/csvParser";

export default function PtoPacerClient() {
  const [ptoData, setPTOData] = useState<PTOData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processData = async (dataSource: string | File) => {
    setIsLoading(true);
    setError(null);
    try {
      const text =
        typeof dataSource === "string" ? dataSource : await dataSource.text();
      const parsedData = parsePTOData(text);
      setPTOData(parsedData);
    } catch (error) {
      setError("Failed to parse PTO data. Please check your file format.");
      console.error("Error parsing CSV:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    processData(file);
  };

  const handleCsvPaste = async (csvText: string) => {
    processData(csvText);
  };

  return (
    <>
      {/* <ThemeToggle /> */}
      {ptoData.length === 0 && (
        <div className="mx-auto mb-8 max-w-2xl">
          <Card className="border-2 border-dashed border-gray-300 bg-white/80 backdrop-blur-sm transition-colors hover:border-blue-400 dark:border-gray-600 dark:bg-gray-800/80 dark:hover:border-blue-500">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-gray-800 dark:text-gray-200">
                <TrendingUp className="h-5 w-5" />
                Add Your PTO Data
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-left md:text-center">
                Upload a CSV file or paste your PTO records to see your usage
                patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload
                onFileUpload={handleFileUpload}
                onCsvPaste={handleCsvPaste}
                isLoading={isLoading}
              />
              {error && (
                <p className="mt-4 text-center text-sm text-red-500">{error}</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      {ptoData.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <button
              onClick={() => setPTOData([])}
              className="text-sm text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Upload different file
            </button>
          </div>

          <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm dark:bg-gray-800/80">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                PTO Usage Pattern (Jan-Jul YTD)
              </CardTitle>
              <CardDescription className="dark:text-gray-400">
                Cumulative days off taken from January through July for each
                year
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PTOChart data={ptoData} />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
