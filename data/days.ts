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
];

// Generiere 365 Tage für das Jahr 2026
export const days = Array.from({ length: 365 }, (_, i) => {
  const year = 2026;
  const date = new Date(year, 0, i + 1); // 0 = Januar, i+1 = Tag im Jahr (1-365)
  
  const month = date.getMonth() + 1; // 1-12
  const dayOfMonth = date.getDate(); // 1-31
  const dateString = date.toISOString().split('T')[0];
  
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
