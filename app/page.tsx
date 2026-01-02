"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { days } from "@/data/days";
import dayjs from "dayjs";
import { useState } from "react";

export default function HomePage() {
  const today = dayjs();
  const todayString = today.format('YYYY-MM-DD'); // z.B. "2026-01-02"
  const [selectedMonth, setSelectedMonth] = useState(today.month() + 1); // 1-12

  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  // Filter Tage nach ausgewähltem Monat und sortiere nach Tag
  const daysInMonth = days
    .filter(d => d.month === selectedMonth)
    .sort((a, b) => a.dayOfMonth - b.dayOfMonth);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-800 to-rose-900 text-center p-6 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-yellow-200 mb-4 font-serif drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]"
      >
        💛 Isi's Jahreskalender 2026
      </motion.h1>

      <p className="text-yellow-100 mb-6 text-lg">
        Jeden Tag ein Spruch & ein Kompliment für dich ✨
      </p>

      {/* Monatsauswahl */}
      <div className="mb-6 flex justify-center gap-2 flex-wrap max-w-4xl mx-auto">
        {monthNames.map((month, index) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(index + 1)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedMonth === index + 1
                ? "bg-yellow-400 text-purple-900 shadow-lg"
                : "bg-purple-700/50 text-yellow-100 hover:bg-purple-600"
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
          // Vergleiche Datumsstrings direkt: Tag ist freigeschaltet wenn unlockDate < heute
          const unlocked = d.unlockDate < todayString;

          return (
            <motion.div
              key={d.id}
              className={`aspect-square w-12 sm:w-14 rounded-xl border-2 flex flex-col items-center justify-center shadow-lg transition-all duration-300
    ${unlocked
                  ? "bg-gradient-to-br from-pink-600 to-rose-600 border-yellow-400 text-white cursor-pointer hover:scale-110"
                  : "bg-purple-900/40 border-purple-700 text-gray-400 cursor-not-allowed"
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

      <p className="text-sm text-yellow-100 mt-10 opacity-80 italic">
        Jeden Tag ein kleines Stück Liebe ✨
      </p>

      {/* 💞 Persönliches Foto */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 max-w-md mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/60 bg-gradient-to-br from-pink-800/20 to-purple-900/20 backdrop-blur-sm">
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
        <p className="text-lg text-yellow-100 font-medium italic drop-shadow-lg text-center mt-4">
          365 Tage voller Liebe und Komplimente für dich. 💛
        </p>
      </motion.div>

      <motion.footer
        className="mt-16 text-xs text-yellow-100/60"
      >
        Created with 💛 by Gunnar
      </motion.footer>
    </main>
  );
}
