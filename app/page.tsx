"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { days } from "@/data/days";
import { useState, useEffect, useRef } from "react";
import { getSeasonColors } from "./lib/seasonColors";
import { MONTH_NAMES } from "./lib/constants";
import { getTodayString, getCurrentMonth, isUnlocked } from "./lib/dateUtils";

export default function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [todayString, setTodayString] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

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

  // Berechne Fortschritt
  const unlockedDays = days.filter(d => isUnlocked(d.unlockDate, todayString));
  const progress = (unlockedDays.length / days.length) * 100;

  // Smooth Scroll zu heute beim Monatswechsel
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedMonth]);

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

      {/* Fortschrittsanzeige */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6 max-w-md mx-auto"
      >
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm font-semibold ${colors.text}`}>
            📅 {unlockedDays.length} / {days.length} Tage
          </span>
          <span className={`text-sm ${colors.accent}`}>
            {progress.toFixed(1)}%
          </span>
        </div>
        <div className="w-full bg-black/20 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-full ${colors.button} rounded-full`}
          />
        </div>
      </motion.div>

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
        ref={gridRef}
        className="grid grid-cols-7 sm:grid-cols-10 gap-3 sm:gap-2 justify-items-center relative z-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.01 } },
        }}
      >
        {daysInMonth.map((d) => {
          const unlocked = isUnlocked(d.unlockDate, todayString);
          const isToday = d.unlockDate === todayString;

          return (
            <motion.div
              key={d.id}
              className={`aspect-square w-12 sm:w-14 rounded-xl border-2 flex flex-col items-center justify-center shadow-lg transition-all duration-300 relative
    ${unlocked
                  ? `${colors.button} ${colors.border} text-white cursor-pointer hover:scale-110`
                  : `${colors.buttonInactive} text-gray-400 cursor-not-allowed`
                }
    ${isToday ? 'ring-4 ring-yellow-400 ring-opacity-75' : ''}`}
              whileHover={unlocked ? { scale: 1.1 } : {}}
            >
              {isToday && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full shadow-lg"
                >
                  Heute
                </motion.div>
              )}
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
