"use client";
import { TrendingUp, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useMounted } from "@/src/hooks/useMounted";

export const LiveWeightCard = () => {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
            <Activity
              size={18}
              className="text-emerald-600 dark:text-emerald-400"
            />
          </div>
          <div>
            <span className="block text-[14px] font-bold font-plenty text-neutral-400 dark:text-neutral-500 ">
              Timbangan Hewan
            </span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 italic">
              Scale ID: #IOT-QT-01
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10 backdrop-blur-sm">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-40" />
          </div>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 uppercase font-plenty">
            Connected
          </span>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="relative flex flex-col items-center justify-center py-6 md:py-12">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
          <span className="text-[12rem] md:text-[20rem] font-black text-neutral-100 dark:text-neutral-800 select-none tracking-tighter leading-none translate-y-4">
            WEIGHT
          </span>
        </div>

        <div className="relative flex items-baseline gap-2 md:gap-4">
          <motion.h2
            key="45.2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-8xl md:text-[12rem] leading-none font-black font-mono tracking-tighter bg-linear-to-b from-neutral-900 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent drop-shadow-sm"
          >
            45.2
          </motion.h2>
          <div className="flex flex-col mb-4 md:mb-8">
            <span className="text-3xl md:text-5xl font-black text-neutral-400 dark:text-neutral-600 tracking-tighter">
              kg
            </span>
          </div>
        </div>
      </div>

      {/* Footer Stats Section */}
      <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 py-1.5 px-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 whitespace-nowrap">
            <TrendingUp
              size={14}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
              +2.3 kg
            </span>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-30 leading-relaxed">
            Gain compared to previous weighing
          </p>
        </div>

        <div className="text-center sm:text-right w-full sm:w-auto">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
            Last Update
          </p>
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
            Today, 14:24:02
          </p>
        </div>
        <div className="text-center sm:text-right w-full sm:w-auto ">
          <button className="px-8 py-3 border border-neutral-200 dark:border-neutral-700 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 font-bold text-sm shadow-sm">
            Stop Session
          </button>
        </div>
      </div>
    </>
  );
};
