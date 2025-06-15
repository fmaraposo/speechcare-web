import { DateTime } from "luxon";

export const getCurrentDate = (): string => {
  return DateTime.now().toISO();
};

export const addDays = (date: string, days: number): string => {
  return DateTime.fromISO(date).plus({ days }).toISO();
};
