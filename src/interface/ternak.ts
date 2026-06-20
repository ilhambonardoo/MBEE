import { Ternak } from "../generated/prisma/client";
import {
  JenisHewan,
  JenisKelamin,
  ProgramTernak,
  StatusKehamilan,
} from "../generated/prisma/enums";

export interface TernakModel {
  kode_hewan: string;
  jenis_hewan: JenisHewan;
  beratAwal: number;
  beratAkhir: number;
  nama: string;
  jenis_kelamin: JenisKelamin | null;
  umur: number;
  tgl_lahir: Date | null;
  statusHamil: StatusKehamilan | null;
  tgl_masuk?: Date;
  imageUrl?: string | null;
  imageKey?: string | null;
  userId?: string | null;
  sekatId: string | null;
  programTernak?: ProgramTernak | null;
  sekat?: {
    id: string;
    kodeSekat: string;
    kandangId: string;
    kandang?: {
      id: string;
      nama: string;
    };
  } | null;
}

export interface TernakFormProps {
  initialData?: TernakModel | null;
  onSubmit: (
    data: Ternak,
    file: File | null,
    isImageRemoved: boolean,
  ) => Promise<void>;
  isSubmitting: boolean;
  submitLabel: string;
  kandangList: {
    id: string;
    nama: string;
    sekatList: {
      id: string;
      kodeSekat: string;
      keteranganSekat: string;
    }[];
  }[];
}

export interface StatsData {
  total: number;
  jantan: number;
  betina: number;
  domba: number;
  kambing: number;
}

// Definisi tipe extend untuk TypeScript agar tidak error membaca relasi sekat & kandang
export interface TernakExtended {
  id: string;
  kode_hewan: string;
  nama: string;
  jenis_hewan: string;
  jenis_kelamin: string | null;
  beratAwal: number;
  beratAkhir: number;
  imageUrl?: string | null;
  programTernak: string | null;
  sekat?: {
    kodeSekat: string;
    keteranganSekat: string;
    kandang?: {
      nama: string;
    };
  } | null;
}
