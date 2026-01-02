"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { days } from "@/data/days";
import dayjs from "dayjs";

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

    const todayString = dayjs().format('YYYY-MM-DD');
    const unlocked = content.unlockDate <= todayString;

    if (!unlocked) router.push("/");

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-pink-800 to-rose-900 p-6 text-center text-white font-serif">
            <motion.div
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md border-2 border-yellow-400"
            >

                <motion.h2
                    className="text-3xl font-bold mb-4 text-yellow-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    {content.title}
                </motion.h2>

                {/* Spruch */}
                <motion.div
                    className="mb-6 p-4 bg-pink-600/30 rounded-xl border border-pink-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <p className="text-sm text-yellow-100 font-semibold mb-1">Spruch des Tages</p>
                    <p className="text-lg text-yellow-50 italic">
                        {content.text}
                    </p>
                </motion.div>

                {/* Kompliment */}
                <motion.div
                    className="p-4 bg-rose-600/30 rounded-xl border border-rose-400/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <p className="text-sm text-yellow-100 font-semibold mb-1">Dein Kompliment</p>
                    <p className="text-lg text-yellow-50 italic">
                        {content.compliment}
                    </p>
                </motion.div>
            </motion.div>

            <button
                onClick={() => router.push("/")}
                className="mt-8 px-6 py-2 bg-yellow-400 text-purple-900 rounded-full shadow-lg font-semibold hover:bg-yellow-300 transition"
            >
                Zurück zum Kalender
            </button>
        </main>
    );
}
