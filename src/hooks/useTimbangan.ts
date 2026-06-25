// @/src/hooks/useLiveWeight.ts
"use client";

import { useEffect, useState } from "react";
import { rtdb } from "@/src/lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { useMounted } from "@/src/hooks/useMounted";
import toast from "react-hot-toast";

export const useTimbangan = () => {
  const mounted = useMounted();
  const [liveWeight, setLiveWeight] = useState<string>("0.0");
  const [lastUpdateTime, setLastUpdateTime] = useState<string>("-");
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (!mounted) return;

    const weightRef = ref(rtdb, "timbangan/total_berat");
    const buttonRef = ref(rtdb, "timbangan/is_locked");

    const unsubscribeWeight = onValue(weightRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null && data !== undefined) {
        setLiveWeight(Number(data).toFixed(1));
        setIsConnected(true);

        const now = new Date();
        const timeString = now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setLastUpdateTime(`Hari ini ${timeString}`);
      } else {
        setIsConnected(false);
      }
    });

    const unsubscribeButton = onValue(buttonRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null && data !== undefined) {
        setIsLocked(!!data);
      }
    });

    return () => {
      unsubscribeWeight();
      unsubscribeButton();
    };
  }, [mounted]);

  const toggleLockSession = async () => {
    try {
      const buttonRef = ref(rtdb, "timbangan/is_locked");
      await set(buttonRef, !isLocked);
    } catch {
      toast.error("Gagal mengubah status timbangan");
    }
  };

  return {
    liveWeight,
    lastUpdateTime,
    isLocked,
    isConnected,
    toggleLockSession,
  };
};
