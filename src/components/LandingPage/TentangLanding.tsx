"use client";
import { motion } from "framer-motion";
import { useTypewriter } from "@/src/hooks/useTypewriter";
import Link from "next/link";

const TentangLanding = () => {
  const fullText =
    "Platform website untuk memudahkan manajemen berat hewan ternak kambing dengan teknologi IoT dan Machine Learning. Proyek ini merupaakan kerja sama antara prodi Teknologi Rekayasa Komputer dengan Teknologi Manajemen Ternak IPB University.";
  const displayedText = useTypewriter(fullText, 30);

  return (
    <section className="w-full bg-amber-700 h-96 py-16 lg:pt-16 relative">
      <div className="max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-8"
        >
          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl text-white font-plenty leading-relaxed">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 8, ease: "easeInOut" }}
          className="w-2xl"
        >
          <Link
            href="#features"
            className="inline-flex absolute  bottom-40 right-50 items-center justify-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-2xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            Tentang kami
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangLanding;
