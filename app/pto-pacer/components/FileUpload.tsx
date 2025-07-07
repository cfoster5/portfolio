"use client";

import { useCallback, useState } from "react";
import {
  Upload,
  FileText,
  Loader2,
  ClipboardPaste,
  Lightbulb,
} from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Textarea } from "./textarea";

type FileUploadProps = {
  onFileUpload: (file: File) => void;
  onCsvPaste: (csvText: string) => void;
  isLoading: boolean;
};

export const FileUpload = ({
  onFileUpload,
  onCsvPaste,
  isLoading,
}: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [csvText, setCsvText] = useState("");
  const [activeTab, setActiveTab] = useState<"upload" | "paste">("upload");

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      const csvFile = files.find(
        (file) => file.type === "text/csv" || file.name.endsWith(".csv"),
      );

      if (csvFile) {
        onFileUpload(csvFile);
      }
    },
    [onFileUpload],
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handlePasteSubmit = () => {
    if (csvText.trim()) {
      onCsvPaste(csvText.trim());
      setCsvText("");
    }
  };

  const handleSampleData = () => {
    const sampleData = `Start Day,End Day,Days Requested,Hours Requested
6/20/2025,6/20/2025,1,8
5/12/2025,5/12/2025,1,8
4/15/2025,4/18/2025,4,32
3/10/2025,3/10/2025,1,8
2/14/2025,2/17/2025,2,16
1/20/2025,1/24/2025,5,40
12/23/2024,12/27/2024,5,40
11/28/2024,11/29/2024,2,16
10/10/2024,10/11/2024,2,16
9/2/2024,9/6/2024,5,40
8/15/2024,8/16/2024,2,16
7/4/2024,7/5/2024,2,16
6/17/2024,6/21/2024,5,40
5/27/2024,5/31/2024,5,40
4/22/2024,4/26/2024,5,40
3/11/2024,3/15/2024,5,40
2/19/2024,2/23/2024,5,40
1/15/2024,1/19/2024,5,40`;
    setCsvText(sampleData);
  };

  return (
    <div className="w-full space-y-4">
      {/* Tab buttons */}
      <div className="flex gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "upload"
              ? "bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-gray-100"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          <Upload className="mr-2 inline h-4 w-4" />
          Upload File
        </button>
        <button
          onClick={() => setActiveTab("paste")}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "paste"
              ? "bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-gray-100"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          <ClipboardPaste className="mr-2 inline h-4 w-4" />
          Paste CSV
        </button>
      </div>

      {/* Upload tab */}
      {activeTab === "upload" && (
        <div
          className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
            isDragOver
              ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500"
          }`}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <label
            htmlFor="csv-file-input"
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <input
              id="csv-file-input"
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              disabled={isLoading}
            />
          </label>

          <div className="space-y-4">
            {isLoading ? (
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-blue-500" />
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            )}

            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {isLoading ? "Processing..." : "Drop your CSV file here"}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                or click to browse files
              </p>
            </div>

            <Button variant="outline" className="mt-4" disabled={isLoading}>
              <FileText className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </div>
        </div>
      )}

      {/* Paste tab */}
      {activeTab === "paste" && (
        <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="csv-textarea"
                className="block text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-200"
              >
                Paste CSV Data
              </label>
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSampleData}
                  disabled={isLoading}
                  className="text-sm"
                >
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Use Sample Data
                </Button>
              </div>
              <Textarea
                id="csv-textarea"
                placeholder="Paste your CSV data here...&#10;Start Day,End Day,Days Requested,Hours Requested&#10;6/20/2025,6/20/2025,1,8&#10;5/12/2025,5/12/2025,1,8"
                value={csvText}
                onChange={(e) => setCsvText(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
                disabled={isLoading}
              />
            </div>
            <Button
              onClick={handlePasteSubmit}
              disabled={!csvText.trim() || isLoading}
              className="w-full"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ClipboardPaste className="mr-2 h-4 w-4" />
              )}
              {isLoading ? "Processing..." : "Process CSV Data"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
