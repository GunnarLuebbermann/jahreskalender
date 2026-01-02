import type { SeasonColors } from "./types";

export const getSeasonColors = (month: number): SeasonColors => {
  if (month >= 3 && month <= 5) {
    // Frühling: Frische Grün- und Pastelltöne
    return {
      background: "from-green-100 via-pink-100 to-yellow-100",
      text: "text-green-900",
      accent: "text-pink-600",
      button: "bg-green-600 hover:bg-green-700",
      buttonInactive: "bg-green-900/40 border-green-700",
      monthButton: "bg-green-400 text-green-900",
      monthButtonInactive: "bg-green-800/50 text-green-100 hover:bg-green-700",
      border: "border-green-400",
      boxBg: "bg-green-600/20",
      boxBorder: "border-green-400/50",
      footer: "text-green-900/60"
    };
  } else if (month >= 6 && month <= 8) {
    // Sommer: Warme, sonnige Farben
    return {
      background: "from-yellow-300 via-orange-200 to-pink-300",
      text: "text-orange-900",
      accent: "text-pink-700",
      button: "bg-orange-500 hover:bg-orange-600",
      buttonInactive: "bg-orange-900/40 border-orange-700",
      monthButton: "bg-yellow-400 text-orange-900",
      monthButtonInactive: "bg-orange-700/50 text-yellow-100 hover:bg-orange-600",
      border: "border-yellow-400",
      boxBg: "bg-orange-500/20",
      boxBorder: "border-orange-400/50",
      footer: "text-orange-900/60"
    };
  } else if (month >= 9 && month <= 11) {
    // Herbst: Warme Orange-, Rot- und Brauntöne
    return {
      background: "from-orange-700 via-red-600 to-amber-800",
      text: "text-yellow-100",
      accent: "text-orange-200",
      button: "bg-amber-600 hover:bg-amber-700",
      buttonInactive: "bg-orange-900/40 border-orange-800",
      monthButton: "bg-amber-400 text-amber-900",
      monthButtonInactive: "bg-orange-800/50 text-amber-100 hover:bg-orange-700",
      border: "border-amber-400",
      boxBg: "bg-amber-600/30",
      boxBorder: "border-amber-400/50",
      footer: "text-yellow-100/60"
    };
  } else {
    // Winter: Kühle Blau- und Lila-Töne
    return {
      background: "from-blue-900 via-indigo-800 to-purple-900",
      text: "text-blue-100",
      accent: "text-indigo-200",
      button: "bg-indigo-600 hover:bg-indigo-700",
      buttonInactive: "bg-indigo-900/40 border-indigo-800",
      monthButton: "bg-blue-400 text-blue-900",
      monthButtonInactive: "bg-indigo-800/50 text-blue-100 hover:bg-indigo-700",
      border: "border-blue-400",
      boxBg: "bg-indigo-600/30",
      boxBorder: "border-indigo-400/50",
      footer: "text-blue-100/60"
    };
  }
};
