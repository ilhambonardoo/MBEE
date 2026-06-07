"use client";
import { useCallback, useEffect, useState } from "react";
import { Kambing } from "../generated/prisma/client";
import toast from "react-hot-toast";
import { StatsData } from "../interface/kambing";
import { getKambingStats } from "../services/kambing-services";

export function useKambing() {
  const [dataKambing, setDataKambing] = useState<Kambing[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const [errors, setErrors] = useState("");
  const [stats, setStats] = useState<StatsData | null>(null);

  const getDataKambing = useCallback(async () => {
    try {
      setIsloading(true);
      const res = await fetch("/api/kambing");
      const data = await res.json();

      if (!res.ok) {
        setErrors("Gagal mengambil data");
        return;
      }

      setDataKambing(data);
    } catch {
      setErrors("Terjadi kesalahan pada jaringan!");
    } finally {
      setIsloading(false);
    }
  }, []);

  const getStatsKambing = useCallback(async () => {
    try {
      const res = await fetch("/api/kambing/stats", { method: "GET" });
      const data = await res.json();

      if (!res.ok) {
        toast.error("Gagal memuat data kambing");
        return;
      }

      setStats(data);
    } catch (error) {
      toast.error("Terjadi kesalahan pada jaringan");
    } finally {
      setIsLoadingStats(false);
    }
  }, []);

  useEffect(() => {
    getDataKambing();
    getStatsKambing();
  }, [getStatsKambing, getDataKambing]);

  const deleteKambing = async (id: string) => {
    const previousData = [...dataKambing];
    const previosStats = stats ? { ...stats } : null;

    setDataKambing((prev) => prev.filter((kambing) => kambing.id !== id)); // set data kambing ke sebelumnya apa bila kambing id tidak sama dengan id yang dipilih

    try {
      const res = await fetch(`/api/kambing/${id}`, { method: "DELETE" });

      if (!res.ok) {
        setDataKambing(previousData);
        setStats(previosStats);
        const errorData = await res.json();
        toast.error(errorData.message || "Gagal menghapus data!");
        return { success: false };
      }
      toast.success("Berhasil menghapus data!");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      getKambingStats();

      return { success: true };
    } catch {
      setDataKambing(previousData);
      toast.error("Terjadi kesalahan pada jaringan!");
      return { success: false };
    }
  };

  return {
    dataKambing,
    stats,
    isLoading: isLoading || isLoadingStats,
    errors,
    getDataKambing,
    getKambingStats,
    deleteKambing,
  };
}
