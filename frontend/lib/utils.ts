import { clsx, type ClassValue } from "clsx";
import { isBefore, isValid, parse, set } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function validateDateTask({
  startDate = "",
  startTime = "",
  endDate = "",
  endTime = "",
}: {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}) {
  if (!startDate && !startTime && !endDate && !endTime) {
    return {
      isValid: false,
      message: "Veuillez renseigner au moins une date et une heure",
    };
  }

  if ((startTime && !startDate) || (endTime && !endDate)) {
    return {
      isValid: false,
      message: "Veuillez renseigner les dates en, plus les horaires",
    };
  }

  if (startDate && !endDate) {
    return { isValid: false, message: "Veuillez renseigner la date de fin" };
  }

  if (!startDate && endDate) {
    return { isValid: false, message: "Veuillez renseigner la date de debut" };
  }

  if ((startTime && !endTime) || (endTime && !startTime)) {
    return {
      isValid: false,
      message: "Veuillez renseigner les horaires de debut et de fin",
    };
  }

  const start = parse(
    `${startDate} ${startTime}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  );
  const end = parse(`${endDate} ${endTime}`, "yyyy-MM-dd HH:mm", new Date());

  if (!isValid(start) || !isValid(end)) {
    return { isValid: false, message: "Veuillez renseigner des dates valides" };
  }

  if (isBefore(end, start)) {
    return {
      isValid: false,
      message: "La date de fin doit être après la date de debut",
    };
  }

  return { isValid: true, message: "" };
}

export function mergeDateTime(dateStr: string, timeStr: string) {
  const date = parse(dateStr, "yyyy-MM-dd", new Date());
  const [hours, minutes] = timeStr.split(":").map(Number);

  return set(date, { hours, minutes });
}
