import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalData: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalData,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between mx-5 mb-10">
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        Menampilkan {startIndex + 1} sampai {Math.min(endIndex, totalData)} dari{" "}
        {totalData} data.
      </p>
      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 rounded-lg border border-gray-200 dark:border-neutral-800 disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 rounded-lg border border-gray-200 dark:border-neutral-800 disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 transition-colors cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
