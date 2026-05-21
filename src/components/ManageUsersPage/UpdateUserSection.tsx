"use client";

import { useMounted } from "@/src/hooks/useMounted";
import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UpdateSectionUserProps {
  id: string;
}

const UpdateSectionUser = ({ id }: UpdateSectionUserProps) => {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("OPERATOR");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const router = useRouter();
  const mounted = useMounted();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${id}`);
        const data = await res.json();

        if (data && data.user) {
          setNama(data.user.nama || "");
          setUsername(data.user.username || "");
          setEmail(data.user.email || "");
          setRole(data.user.role || "OPERATOR");
        } else if (data) {
          setNama(data.nama || "");
          setUsername(data.username || "");
          setEmail(data.email || "");
          setRole(data.role || "OPERATOR");
        }
      } catch {
        toast.error("Gagal mengambil data user");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleUpdate = async () => {
    if (!nama || !username || !email) {
      toast.error("Nama, Username, dan Email harus diisi");
      return;
    }

    setUpdating(true);
    setErrors({});

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          username,
          email,
          role,
          password: password || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors.fieldErrors || data.errors);
          toast.error("Mohon periksa kembali data Anda");
        } else {
          toast.error(data.message || "Gagal memperbarui data");
        }
      } else {
        toast.success("Data user berhasil diperbarui");
        router.push(`/users`);
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    } finally {
      setUpdating(false);
    }
  };

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <section className="relative z-10 flex flex-col gap-6 md:gap-10 p-5">
      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-neutral-500 hover:text-amber-700 dark:text-neutral-400 dark:hover:text-amber-500 transition-colors w-fit cursor-pointer"
        >
          <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
            <ArrowLeft size={20} />
          </div>
        </button>
        <div className="max-w-xl">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-5xl font-plenty text-neutral-900 dark:text-white">
            Update{" "}
            <span className="text-amber-700 dark:text-amber-600">User</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Perbarui informasi akun pengguna untuk mengelola hak akses dan
            profil dalam sistem.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => {
                setNama(e.target.value);
                if (errors.nama) setErrors({ ...errors, nama: [] });
              }}
              placeholder="Contoh: Ahmad Fauzi"
              className={`p-3 rounded-xl border bg-transparent text-neutral-900 dark:text-white placeholder:text-neutral-500/60 dark:placeholder:text-neutral-400 focus:ring-2 outline-none transition-all ${
                errors.nama?.length
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-neutral-300 dark:border-neutral-700 focus:ring-amber-500"
              }`}
            />
            {errors.nama && (
              <span className="text-xs text-red-500">{errors.nama[0]}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errors.username) setErrors({ ...errors, username: [] });
              }}
              placeholder="Contoh: ahmad_f"
              className={`p-3 rounded-xl border bg-transparent text-neutral-900 dark:text-white placeholder:text-neutral-500/60 dark:placeholder:text-neutral-400 focus:ring-2 outline-none transition-all ${
                errors.username?.length
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-neutral-300 dark:border-neutral-700 focus:ring-amber-500"
              }`}
            />
            {errors.username && (
              <span className="text-xs text-red-500">{errors.username[0]}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: [] });
              }}
              placeholder="Contoh: ahmad@gmail.com"
              className={`p-3 rounded-xl border bg-transparent text-neutral-900 dark:text-white placeholder:text-neutral-500/60 dark:placeholder:text-neutral-400 focus:ring-2 outline-none transition-all ${
                errors.email?.length
                  ? "border-red-500 focus:ring-red-500/30"
                  : "border-neutral-300 dark:border-neutral-700 focus:ring-amber-500"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email[0]}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer"
            >
              <option value="OPERATOR" className="bg-white dark:bg-neutral-900">
                Operator
              </option>
              <option value="ADMIN" className="bg-white dark:bg-neutral-900">
                Admin
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Password Baru (Opsional)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
            />
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              Biarkan kosong jika tidak ingin mengubah password.
            </p>
          </div>

          <button
            onClick={handleUpdate}
            disabled={updating}
            className="mt-auto h-14 flex items-center justify-center cursor-pointer bg-amber-700 text-white rounded-xl font-bold hover:bg-amber-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-amber-900/20 active:scale-[0.98] gap-2"
          >
            {updating ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full w-5 h-5 border-2 border-white/30 border-t-white"></div>
                <span>Memperbarui...</span>
              </div>
            ) : (
              <>
                <Save size={20} />
                <span>Simpan Perubahan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateSectionUser;
