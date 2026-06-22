import { useCallback, useState } from "react";
import { PrediksiBobotResponse, PrediksiPakan } from "../interface/prediksi";
import toast from "react-hot-toast";

export function useMachine() {
  const [dataBobot, setDataBobot] = useState<PrediksiBobotResponse>();
  const [dataPrediksi, setDataPrediksi] = useState<PrediksiPakan | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDataBobot = useCallback(async (ternakId: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/ternak/${ternakId}/bobot`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setDataBobot(data);
    } catch {
      toast.error("Gagal mengambil kalkulasi bobot ML");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDataPakan = useCallback(async (sekatId: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/kandang/sekat/${sekatId}/prediksi`);
      const data = await res.json();

      if (data.status === "success") {
        setDataPrediksi(data);
      } else {
        toast.error(data.message || "Gagal memproses prediksi");
      }
    } catch {
      toast.error("Koneksi ke server bermasalah");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    dataPrediksi,
    dataBobot,
    isLoading,
    getDataPakan,
    getDataBobot,
  };
}
