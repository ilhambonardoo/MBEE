"use client";

import { useTypewriter } from "@/src/hooks/useTypewriter";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const goats = [
  {
    id: 3,
    name: "Kambing 3",
    src: "/kambing3.jpg",
  },
  {
    id: 4,
    name: "Kambing 4",
    src: "/kambing4.jpg",
  },
  {
    id: 5,
    name: "Kambing 5",
    src: "/kambing5.jpg",
  },
];

const JenisKambing = () => {
  const fullText =
    "Kami menghadirkan dua program studi unggulan, yaitu Teknologi Rekayasa Komputer dan Teknologi Manajemen Ternak berbasis IoT, yang dirancang untuk menjawab kebutuhan industri modern. Melalui kolaborasi ini, mahasiswa dibekali kemampuan dalam mengembangkan sistem cerdas, mulai dari perangkat lunak, perangkat keras, hingga integrasi Internet of Things untuk mendukung pengelolaan peternakan yang efisien dan berkelanjutan. Program ini menekankan penerapan teknologi dalam monitoring kesehatan ternak, dan manajemen penimbangan dengan metode CRUD.";

  const displayText = useTypewriter(fullText, 30);
  return (
    <>
      <section className="w-full bg-white pt-24">
        <div className="flex justify-center items-center">
          <div className="w-1/2  ">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              loop={true}
              speed={500}
              spaceBetween={0}
              slidesPerView={1}
            >
              {goats.map((goat) => (
                <SwiperSlide key={goat.id}>
                  <Image
                    src={goat.src}
                    alt={goat.name}
                    height={100}
                    width={400}
                    className="w-full p-4 rounded-4xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-1/2 p-10">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-4 font-plenty">
                Ternak dan Teknologi
              </h2>
              <p className="text-lg text-justify text-gray-700 leading-relaxed font-nb">
                {displayText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JenisKambing;
