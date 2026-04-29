"use client";
import { useMounted } from "@/src/hooks/useMounted";

const CardInfoKambing = () => {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <>
      <section className="w-full p-6 lg:p-10">
        <div>
          <div className="mb-9">
            <h1 className="text-xl font-plenty text-zinc-800 dark:text-zinc-100">
              Informasi Kambing
            </h1>
            <p className="text-sm text-zinc-500">
              Bagian untuk mempermudah melihat jumlah kambing yang sehat dan
              sakit
            </p>
          </div>
          <div className="flex gap-4">
            <div className="h-52 w-1/3 dark:bg-neutral-800 bg-neutral-400 rounded-3xl"></div>
            <div className="h-52 w-1/3 dark:bg-neutral-800 bg-neutral-400 rounded-3xl"></div>
            <div className="h-52 w-1/3 dark:bg-neutral-800 bg-neutral-400 rounded-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardInfoKambing;
