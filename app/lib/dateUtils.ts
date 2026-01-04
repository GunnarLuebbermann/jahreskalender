import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Plugins laden
dayjs.extend(utc);
dayjs.extend(timezone);

// Deutsche Zeitzone
const GERMAN_TIMEZONE = 'Europe/Berlin';

/**
 * Formatiert das aktuelle Datum in deutscher Zeit als YYYY-MM-DD String
 */
export const getTodayString = (): string => {
  return dayjs().tz(GERMAN_TIMEZONE).format('YYYY-MM-DD');
};

/**
 * Prüft ob ein Tag freigeschaltet ist (unlockDate <= heute in deutscher Zeit)
 */
export const isUnlocked = (unlockDate: string, today?: string): boolean => {
  const todayString = today || getTodayString();
  return unlockDate <= todayString;
};

/**
 * Gibt den aktuellen Monat in deutscher Zeit zurück (1-12)
 */
export const getCurrentMonth = (): number => {
  return dayjs().tz(GERMAN_TIMEZONE).month() + 1;
};
