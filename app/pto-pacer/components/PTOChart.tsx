import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { PTOData } from "../types";

type PTOChartProps = {
  data: PTOData[];
};

export const PTOChart = ({ data }: PTOChartProps) => {
  // Group data by year and transform for chart
  const yearData = data.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = {};
    }
    acc[item.year][item.month] = item.cumulativeDays;
    return acc;
  }, {} as Record<number, Record<string, number>>);

  // Create chart data structure
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const chartData = months.map((month) => {
    const dataPoint = { month };
    Object.keys(yearData).forEach((year) => {
      dataPoint[year] = yearData[parseInt(year)][month] || 0;
    });
    return dataPoint;
  });

  const years = Object.keys(yearData).sort();
  const colors = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",
  ];
  const currentYear = new Date().getFullYear();

  // Calculate comparison for current year vs previous year
  const currentMonth = new Date().getMonth(); // 0-based (July = 6)
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const currentMonthName = monthNames[currentMonth];

  const currentYearData = yearData[currentYear];
  const previousYear = currentYear - 1;
  const previousYearData = yearData[previousYear];

  let comparison = null;
  if (
    currentYearData &&
    previousYearData &&
    currentYearData[currentMonthName] !== undefined &&
    previousYearData[currentMonthName] !== undefined
  ) {
    const currentDays = currentYearData[currentMonthName];
    const previousDays = previousYearData[currentMonthName];
    const difference = currentDays - previousDays;

    comparison = {
      difference: Math.abs(difference),
      isAhead: difference > 0,
      isSame: difference === 0,
      currentDays,
      previousDays,
    };
  }

  return (
    <div className="w-full space-y-4">
      {comparison && (
        <div className="flex items-center justify-center">
          <div
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${
              comparison.isSame
                ? "border-gray-200 bg-gray-50 text-gray-700"
                : comparison.isAhead
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-green-200 bg-green-50 text-green-700"
            }`}
          >
            {comparison.isSame ? (
              <Minus className="h-4 w-4" />
            ) : comparison.isAhead ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            <span className="font-medium">
              {comparison.isSame
                ? `Same pace as ${previousYear}`
                : `${comparison.difference} day${
                    comparison.difference !== 1 ? "s" : ""
                  } ${
                    comparison.isAhead ? "ahead of" : "behind"
                  } ${previousYear}`}
            </span>
            <span className="text-sm opacity-75">
              ({comparison.currentDays} vs {comparison.previousDays} days by{" "}
              {currentMonthName})
            </span>
          </div>
        </div>
      )}

      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis
              dataKey="month"
              className="text-sm"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              className="text-sm"
              tick={{ fontSize: 12 }}
              label={{
                value: "Cumulative Days",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            {years.map((year, index) => (
              <Line
                key={year}
                type="monotone"
                dataKey={year}
                stroke={colors[index % colors.length]}
                strokeWidth={3}
                strokeDasharray={parseInt(year) === currentYear ? "0" : "5 5"}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
