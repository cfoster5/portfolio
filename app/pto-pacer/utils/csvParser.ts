import { PTOData } from "../types";

type PTORecord = {
  startDay: string;
  endDay: string;
  daysRequested: number;
  hoursRequested: number;
};

export const parsePTOData = (csvText: string): PTOData[] => {
  const lines = csvText.trim().split("\n");
  // const headers = lines[0].split(",");

  // Parse CSV records
  const records: PTORecord[] = lines.slice(1).map((line) => {
    const values = line.split(",");
    return {
      startDay: values[0],
      endDay: values[1],
      daysRequested: parseInt(values[2]) || 0,
      hoursRequested: parseInt(values[3]) || 0,
    };
  });

  // Get current date info for filtering
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // 0-based (December = 11)
  const currentYear = currentDate.getFullYear();

  // Group by year and month, include all months up to current month for current year
  const monthlyData: Record<number, Record<string, number>> = {};

  records.forEach((record) => {
    const startDate = new Date(record.startDay);
    const year = startDate.getFullYear();
    const month = startDate.getMonth(); // 0-based

    // For current year, only include data up to current month
    // For past years, include all months
    const maxMonth = year === currentYear ? currentMonth : 11; // December = 11
    if (month > maxMonth) return;

    if (!monthlyData[year]) {
      monthlyData[year] = {};
    }

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthName = monthNames[month];

    if (!monthlyData[year][monthName]) {
      monthlyData[year][monthName] = 0;
    }

    monthlyData[year][monthName] += record.daysRequested;
  });

  // Convert to cumulative data
  const result: PTOData[] = [];
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  Object.keys(monthlyData).forEach((yearStr) => {
    const year = parseInt(yearStr);
    let cumulative = 0;

    // Determine how many months to include for this year
    const maxMonthIndex = year === currentYear ? currentMonth : 11; // December = 11

    monthOrder.slice(0, maxMonthIndex + 1).forEach((month) => {
      cumulative += monthlyData[year][month] || 0;
      result.push({
        month,
        year,
        cumulativeDays: cumulative,
      });
    });
  });

  return result.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
  });
};
