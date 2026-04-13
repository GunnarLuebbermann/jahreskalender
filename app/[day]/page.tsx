"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { days } from "@/data/days";
import { getSeasonColors } from "../lib/seasonColors";
import { getTodayString, isUnlocked } from "../lib/dateUtils";

export default function DayPage({
    params,
}: {
    params: Promise<{ day: string }>;
}) {
    const router = useRouter();
    const { day } = use(params);

    // Finde den Tag anhand der ID (z.B. "0101" für 1. Januar)
    const content = days.find((d) => d.id === day);

    if (!content) return <p>Not found</p>;

    const todayString = getTodayString();
    const unlocked = isUnlocked(content.unlockDate, todayString);

    if (!unlocked) router.push("/");

    const colors = getSeasonColors(content.month);

    return (
        <main className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b ${colors.background} p-6 text-center font-serif`}>
            <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md border-2 ${content.isSpecial ? 'border-yellow-400 ring-4 ring-yellow-400/50' : colors.border}`}
            >

                {/* Spezieller Tag Banner */}
                {content.isSpecial && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="mb-6"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-6xl mb-3"
                        >
                            {content.specialEmoji}
                        </motion.div>
                        <h1 className="text-2xl font-bold text-yellow-300 drop-shadow-lg">
                            {content.specialTitle}
                        </h1>
                    </motion.div>
                )}

                <motion.h2
                    className={`text-3xl font-bold mb-1 ${colors.text}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {content.title}
                </motion.h2>

                <motion.p
                    className={`text-sm ${colors.accent} mb-4 font-medium`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {content.weekday}
                </motion.p>

                {/* Spezielle Nachricht */}
                {content.isSpecial && content.specialMessage && (
                    <motion.div
                        className="mb-6 p-5 bg-yellow-400/20 rounded-xl border-2 border-yellow-400/50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-sm text-yellow-300 font-semibold mb-2">✨ Besonderer Tag ✨</p>
                        <p className={`text-lg ${colors.text} leading-relaxed`}>
                            {content.specialMessage}
                        </p>
                    </motion.div>
                )}

                {/* Spruch */}
                <motion.div
                    className={`mb-6 p-4 ${colors.boxBg} rounded-xl border ${colors.boxBorder}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: content.isSpecial ? 0.9 : 0.7 }}
                >
                    <p className={`text-sm ${colors.accent} font-semibold mb-1`}>💭 Spruch des Tages</p>
                    <p className={`text-lg ${colors.text} italic`}>
                        {content.text}
                    </p>
                </motion.div>

                {/* Kompliment */}
                <motion.div
                    className={`p-4 ${colors.boxBg} rounded-xl border ${colors.boxBorder}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: content.isSpecial ? 1.1 : 0.9 }}
                >
                    <p className={`text-sm ${colors.accent} font-semibold mb-1`}>💝 Dein Kompliment</p>
                    <p className={`text-lg ${colors.text} italic`}>
                        {content.compliment}
                    </p>
                </motion.div>
            </motion.div>

            <button
                onClick={() => router.push("/")}
                className={`mt-8 px-6 py-2 ${colors.button} rounded-full shadow-lg font-semibold transition`}
            >
                💛 Zurück zum Kalender
            </button>
        </main>
    );
}
