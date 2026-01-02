import dayjs from "dayjs";

/**
 * Formatiert das aktuelle Datum als YYYY-MM-DD String
 */
export const getTodayString = (): string => {
  return dayjs().format('YYYY-MM-DD');
};

/**
 * Prüft ob ein Tag freigeschaltet ist (unlockDate <= heute)
 */
export const isUnlocked = (unlockDate: string, today?: string): boolean => {
  const todayString = today || getTodayString();
  return unlockDate <= todayString;
};

/**
 * Gibt den aktuellen Monat zurück (1-12)
 */
export const getCurrentMonth = (): number => {
  return dayjs().month() + 1;
};
