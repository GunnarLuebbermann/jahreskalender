export interface Day {
  id: string;
  day: number;
  month: number;
  dayOfMonth: number;
  weekday: string;
  title: string;
  text: string;
  compliment: string;
  image: string;
  unlockDate: string;
  isSpecial?: boolean;
  specialEmoji?: string;
  specialTitle?: string;
  specialMessage?: string;
}

export interface SeasonColors {
  background: string;
  text: string;
  accent: string;
  button: string;
  buttonInactive: string;
  monthButton: string;
  monthButtonInactive: string;
  border: string;
  boxBg: string;
  boxBorder: string;
  footer: string;
}
