const sprueche = [
  "Du bist stärker als du denkst.",
  "Jeder Tag mit dir ist ein Geschenk.",
  "Dein Lächeln erhellt meinen Tag.",
  "Du schaffst das!",
  "Gemeinsam sind wir unschlagbar.",
  "Du bist etwas ganz Besonderes.",
  "Ich glaube an dich!",
  "Mit dir ist alles besser.",
  "Du bist meine Inspiration.",
  "Heute ist dein Tag!",
  "Du darfst stolz auf dich sein.",
  "Schritt für Schritt – du kommst an.",
  "Auch kleine Erfolge zählen.",
  "Du bist nicht allein.",
  "Deine Stärke wächst jeden Tag.",
  "Du machst das großartig.",
  "Es ist okay, nicht perfekt zu sein.",
  "Du bist genau richtig, so wie du bist.",
  "Dein Mut verdient Respekt.",
  "Ich bin immer an deiner Seite.",
  "Du bist mein Licht in der Dunkelheit.",
  "Vertraue auf deine Fähigkeiten.",
  "Du bist ein wunderbarer Mensch.",
];

const komplimente = [
  "Deine Augen funkeln wie Sterne.",
  "Du hast das schönste Lachen der Welt.",
  "Du bist unglaublich klug und talentiert.",
  "Deine Stärke beeindruckt mich jeden Tag.",
  "Du hast ein Herz aus Gold.",
  "Mit dir fühle ich mich zuhause.",
  "Du bist wunderschön, innen und außen.",
  "Deine Umarmungen sind die besten.",
  "Du machst die Welt zu einem besseren Ort.",
  "Ich bin so stolz auf dich!",
  "Ich liebe dich!",
  "Ich liebe dein Lachen.",
  "Du bist mein Lieblingsmensch.",
  "Deine Art macht alles leichter.",
  "Du gibst mir so viel Kraft.",
  "Du bist mutiger, als du glaubst.",
  "Ich bewundere deine Ausdauer.",
  "Du bist mein Ruhepol.",
  "Deine Wärme spürt man sofort.",
  "Du bist ein echtes Geschenk.",
  "Mit dir fühlt sich alles richtig an.",
  "Du hast eine unglaubliche Ausstrahlung.",
  "Ich bin dankbar, dich zu haben.",
  "<3",
  "Du bist mein Sonnenschein.",
  "Du bist einzigartig und wundervoll.",
  "Ich liebe deine Leidenschaft.",
  "Du bringst das Beste in mir zum Vorschein.",
  "Deine Freundlichkeit kennt keine Grenzen.",
  "Du bist ein wahrer Schatz.",
  "Ich schätze jeden Moment mit dir.",
];

// Generiere 365 Tage für das Jahr 2026
export const days = Array.from({ length: 365 }, (_, i) => {
  const year = 2026;
  // Starte am 1. Januar 2026 und addiere i Tage
  const date = new Date(2026, 0, 1); // 1. Januar 2026
  date.setDate(date.getDate() + i); // Addiere i Tage (0 für den ersten Tag)
  
  const month = date.getMonth() + 1; // 1-12
  const dayOfMonth = date.getDate(); // 1-31
  
  // Formatiere Datum manuell um Zeitzonenproblemen vorzubeugen
  const dateString = `${year}-${month.toString().padStart(2, '0')}-${dayOfMonth.toString().padStart(2, '0')}`;
  
  // Eindeutige ID: MMDD (z.B. 0101, 0102, 1231)
  const id = `${month.toString().padStart(2, '0')}${dayOfMonth.toString().padStart(2, '0')}`;
  
  // Monatsnamen
  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];
  
  const spruchIndex = i % sprueche.length;
  const komplimentIndex = i % komplimente.length;
  
  return {
    id, // z.B. "0101" für 1. Januar
    day: i + 1, // 1-365 (Tag im Jahr)
    month,
    dayOfMonth,
    title: `${dayOfMonth}. ${monthNames[month - 1]}`,
    text: sprueche[spruchIndex],
    compliment: komplimente[komplimentIndex],
    unlockDate: dateString,
  };
});
