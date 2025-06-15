import { DateTime } from "luxon";

export const getCurrentDate = () => {
  return DateTime.now().toISO();
};

export const addDays = (date: string, days: number) => {
  return DateTime.fromISO(date).plus({ days }).toISO();
};
