import {
  JenisHewan,
  JenisKelamin,
  StatusKehamilan,
} from "@/src/generated/prisma/client";
import { z, type ZodType } from "zod";

export class KambingValidation {
  static readonly CREATE: ZodType = z.object({
    nama: z.string().min(1, "Nama wajib diisi"),
    kode_kambing: z.string().min(1, "Kode kambing wajib diisi"),
    jenis_hewan: z.nativeEnum(JenisHewan),
    beratAwal: z.number().nonnegative("Berat tidak boleh negatif"),
    beratAkhir: z.number().nonnegative("Berat tidak boleh negatif"),
    jenis_kelamin: z.nativeEnum(JenisKelamin),
    umur: z.number().int().nonnegative(),
    tgl_lahir: z.coerce.date().nullable().optional(),
    statusHamil: z.nativeEnum(StatusKehamilan).nullable().optional(),
    tgl_masuk: z.coerce.date().optional(),
    userId: z.string().min(1, "ID user tidak valid"),
    imageUrl: z
      .string()
      .url("URL gambar tidak valid")
      .optional()
      .or(z.literal(""))
      .nullable(),
    imageKey: z.string().optional().or(z.literal("")),
  });

  static readonly UPDATE: ZodType = z.object({
    nama: z.string().min(1, "Nama wajib diisi").optional(),
    kode_kambing: z.string().min(1, "Kode kambing wajib diisi").optional(),
    jenis_hewan: z.nativeEnum(JenisHewan).optional(),
    beratAwal: z.number().nonnegative("Berat tidak boleh negatif").optional(),
    beratAkhir: z.number().nonnegative("Berat tidak boleh negatif").optional(),
    jenis_kelamin: z.nativeEnum(JenisKelamin).optional(),
    umur: z.number().int().nonnegative().optional(),
    tgl_lahir: z.coerce.date().nullable().optional(),
    statusHamil: z.nativeEnum(StatusKehamilan).nullable().optional(),
    tgl_masuk: z.coerce.date().optional(),
    userId: z.string().min(1, "ID user tidak valid").optional(),
    imageUrl: z
      .string()
      .url("URL gambar tidak valid")
      .optional()
      .or(z.literal(""))
      .nullable(),
    imageKey: z.string().optional().or(z.literal("")),
  });
}
