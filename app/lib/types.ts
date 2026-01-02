export interface Day {
  id: string;
  day: number;
  month: number;
  dayOfMonth: number;
  title: string;
  text: string;
  compliment: string;
  image: string;
  unlockDate: string;
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
