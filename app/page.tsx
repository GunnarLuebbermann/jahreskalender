"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { days } from "@/data/days";
import { useState, useEffect } from "react";
import { getSeasonColors } from "./lib/seasonColors";
import { MONTH_NAMES } from "./lib/constants";
import { getTodayString, getCurrentMonth, isUnlocked } from "./lib/dateUtils";

export default function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [todayString, setTodayString] = useState('');

  // Client-seitiges Datum setzen
  useEffect(() => {
    setTodayString(getTodayString());
    setSelectedMonth(getCurrentMonth());
  }, []);

  const colors = getSeasonColors(selectedMonth);

  // Filter Tage nach ausgewähltem Monat und sortiere nach Tag
  const daysInMonth = days
    .filter(d => d.month === selectedMonth)
    .sort((a, b) => a.dayOfMonth - b.dayOfMonth);

  return (
    <main className={`min-h-screen bg-gradient-to-b ${colors.background} text-center p-6 relative overflow-hidden transition-colors duration-700`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-4xl font-bold ${colors.text} mb-4 font-serif drop-shadow-lg`}
      >
        💛 Isi's Jahreskalender 2026
      </motion.h1>

      <p className={`${colors.accent} mb-6 text-lg font-medium`}>
        Jeden Tag ein Spruch & ein Kompliment für dich ✨
      </p>

      {/* Monatsauswahl */}
      <div className="mb-6 flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
        {MONTH_NAMES.map((month, index) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(index + 1)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedMonth === index + 1
                ? colors.monthButton + " shadow-lg"
                : colors.monthButtonInactive
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-7 sm:grid-cols-10 gap-2 justify-items-center relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.01 } },
        }}
      >
        {daysInMonth.map((d) => {
          const unlocked = isUnlocked(d.unlockDate, todayString);

          return (
            <motion.div
              key={d.id}
              className={`aspect-square w-12 sm:w-14 rounded-xl border-2 flex flex-col items-center justify-center shadow-lg transition-all duration-300
    ${unlocked
                  ? `${colors.button} ${colors.border} text-white cursor-pointer hover:scale-110`
                  : `${colors.buttonInactive} text-gray-400 cursor-not-allowed`
                }`}
              whileHover={unlocked ? { scale: 1.1 } : {}}
            >
              <Link href={unlocked ? `/${d.id}` : "#"} className="flex flex-col items-center w-full h-full justify-center">
                <span className="text-sm font-bold">{d.dayOfMonth}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <p className={`text-sm ${colors.accent} mt-10 opacity-80 italic`}>
        Jeden Tag ein kleines Stück Liebe ✨
      </p>

      {/* 💞 Persönliches Foto */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 max-w-md mx-auto"
      >
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 ${colors.border} bg-gradient-to-br from-black/20 to-black/40 backdrop-blur-sm`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
          <Image
            src="/images/Weihnachtsmarkt.jpg"
            alt="Wir zwei"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className={`text-lg ${colors.accent} font-medium italic drop-shadow-lg text-center mt-4`}>
          365 Tage voller Liebe und Komplimente für dich. 💛
        </p>
      </motion.div>

      <motion.footer
        className={`mt-16 text-xs ${colors.footer}`}
      >
        Created with 💛 by Gunnar
      </motion.footer>
    </main>
  );
}
