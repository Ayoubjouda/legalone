import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { differenceInYears } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isOlderThan18(birthDate: Date) {
  const today = new Date();
  const age = differenceInYears(today, birthDate);
  return age >= 18;
}
