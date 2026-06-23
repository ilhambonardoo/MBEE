"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/src/hooks/useMounted";
import { GiProgression } from "react-icons/gi";
import { BrainCircuit } from "lucide-react";
import { TbInputCheck } from "react-icons/tb";

const featuresData = [
  {
    icon: <TbInputCheck className="w-12 h-12 text-[#FFB60C]" />,
    title: "Manajemen Peternakan",
    desc: "Sistem timbangan yang terintegrasi dengan platform web untuk mendukung pengelolaan data ternak secara menyeluruh, termasuk pencatatan, pemantauan, dan manajemen data ternak (CRUD).",
  },
  {
    icon: <GiProgression className="w-12 h-12 text-[#FFB60C]" />,
    title: "Analitik Tren Real-Time",
    desc: "Visualisasi grafik pemantauan kesehatan berkala yang adaptif untuk melacak tren kenaikan atau penurunan bobot ternak, memudahkan peternak melakukan deteksi dini terhadap kondisi kesehatan hewan.",
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-[#FFB60C]" />,
    title: "Prediksi Bobot & Pakan Berbasis AI",
    desc: "Integrasi algoritma Machine Learning melalui FastAPI untuk memprediksi total bobot kelompok ternak pada bulan berikutnya serta memberikan rekomendasi takaran pakan hijauan dan konsentrat yang lebih presisi.",
  },
];

const FeatureSection = () => {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8 transition-colors duration-300 border-t border-gray-100 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-plenty text-4xl md:text-6xl text-black mb-4 uppercase tracking-wider transition-colors duration-300">
            Our Features
          </h2>
          <div className="w-24 h-1 bg-[#FFB60C] mx-auto rounded-full" />
        </div>

        {/* Features Row Layout (Selang-Seling) */}
        <div className="flex flex-col gap-20 md:gap-32">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              {/* Sisi Ikon / Visual */}
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative group p-8 bg-gray-50 rounded-3xl transition-all duration-500 hover:shadow-xl hover:bg-white border border-gray-100 w-48 h-48 flex items-center justify-center">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 bg-[#FFB60C]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
                </div>
              </div>

              {/* Sisi Konten Teks */}
              <div className="w-full md:w-3/5 text-center md:text-left">
                <span className="text-[#FFB60C] font-bold text-xs uppercase tracking-widest block mb-2">
                  Fitur 0{index + 1}
                </span>
                <h3 className="font-plenty text-2xl md:text-3xl text-black mb-6 leading-tight transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
