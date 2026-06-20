import { ConfirmDeleteDialogProps } from "@/src/interface/confirm-delete";
import { AlertTriangle, X } from "lucide-react";

export default function ConfirmDeleteDialog({
  open,
  title = "Hapus Data",
  description = "Apakah Anda yakin ingin menghapus item ini? Tindakan ini tidak dapat dibatalkan.",
  itemName,
  cancelText = "Batal",
  confirmText = "Hapus",
  loading = false,
  onClose,
  onConfirm,
}: ConfirmDeleteDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 backdrop-blur-xs">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Dialog Box */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-delete-title"
        aria-describedby="confirm-delete-description"
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900 transition-all transform scale-100 flex flex-col gap-5 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Alarm / Warning Icon Wrapper dengan Aksen Amber/Red yang Senada */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-500 shadow-xs">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Peringatan!
              </p>
              <h2
                id="confirm-delete-title"
                className="text-lg font-black tracking-tight text-neutral-900 dark:text-neutral-100"
              >
                {title}
              </h2>
            </div>
          </div>

          {/* Close Button Cross */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
            aria-label="Tutup dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Section Description */}
        <p
          id="confirm-delete-description"
          className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"
        >
          {description}
        </p>

        {/* Item Target Preview Box */}
        {itemName ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-sm text-amber-900 dark:border-amber-900/30 dark:bg-amber-950/20 dark:text-amber-300">
            <span className="font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-500 block mb-0.5">
              Data yang Dipilih:
            </span>
            <span className="font-semibold">{itemName}</span>
          </div>
        ) : null}

        {/* Danger Notice Banner */}
        <div className="rounded-xl bg-neutral-50 border border-neutral-100 px-4 py-3 text-xs text-neutral-500 dark:bg-neutral-800/30 dark:border-neutral-800/50 dark:text-neutral-400">
          Tindakan ini bersifat permanen dan data yang hilang tidak dapat
          dipulihkan kembali dari basis data.
        </div>

        {/* Action Button Footer Section */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-transparent px-5 text-sm font-bold text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold px-5 text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {loading ? "Menghapus..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
