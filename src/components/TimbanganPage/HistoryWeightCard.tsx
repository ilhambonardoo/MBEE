"use client";
import { useMounted } from "@/src/hooks/useMounted";
import { History } from "lucide-react";

const HistoryWeightCard = () => {
  const mounted = useMounted();
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-4">
        <div>
          <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
            Growth Trend
          </h3>
          <p className="text-sm text-neutral-400">
            Weekly weight progress analysis
          </p>
        </div>
        <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl border border-neutral-200 dark:border-neutral-700 w-full sm:w-auto shadow-inner">
          <button className="flex-1 sm:flex-none px-5 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white border border-neutral-200/50 dark:border-neutral-600/50">
            7D
          </button>
          <button className="flex-1 sm:flex-none px-5 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-all">
            30D
          </button>
        </div>
      </div>

      <div className="flex-1 w-full bg-neutral-50/50 dark:bg-neutral-900/40 rounded-3xl md:rounded-[2.5rem] border border-dashed border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-8 md:p-20 text-center group transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
          <History
            size={24}
            className="text-neutral-300 dark:text-neutral-600"
          />
        </div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          Initialize Chart Data
        </h4>
        <p className="max-w-70 text-sm text-neutral-400 dark:text-neutral-500 leading-relaxed italic">
          Data analytics akan muncul setelah sesi penimbangan pertama hari ini
          dilakukan.
        </p>
      </div>
    </div>
  );
};

export default HistoryWeightCard;
