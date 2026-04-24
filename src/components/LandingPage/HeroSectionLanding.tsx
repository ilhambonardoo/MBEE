"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSectionLanding = () => {
  const [imageScale, setImageScale] = useState(1);
  const [imageWidth, setImageWidth] = useState("85%");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 20) {
        const scale = Math.min(1.2, 0.8 + scrollY / 200);
        setImageScale(scale);
        setImageWidth("100%");
      } else {
        setImageScale(1);
        setImageWidth("85%");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative bg-white w-full overflow-hidden pt-24 md:pt-0 ">
      <div className="flex flex-col space-y-6 md:space-y-8 my-36 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-plenty font-medium tracking-tight text-gray-900 leading-[1.2] md:leading-[1.1] text-center md:text-left"
        >
          Penimbangan Berat Kambing{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-amber-700">
            Berbasis IoT
          </span>{" "}
          & Machine Learning
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            href="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-2xl hover:bg-amber-800 transition-all shadow-lg shadow-amber-200 hover:shadow-xl hover:-translate-y-1 group"
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      <div className="max-w-full mx-auto px-6 lg:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden m-20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] mx-auto"
          style={{
            scale: imageScale,
            width: imageWidth,
            transition: "ease-in",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
          <Image
            src="/kambing.jpg"
            alt="Smart Livestock Management"
            width={800}
            height={800}
            className="w-full h-auto object-cover rounded-4xl aspect-square md:aspect-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionLanding;
