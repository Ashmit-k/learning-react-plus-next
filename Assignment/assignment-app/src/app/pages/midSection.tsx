"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import ButtonClass from "../utilities/buttons/button";
import Styles from "../Styles/centerHeading-Style.module.css";

interface IAIModel {
  src: string;
  alt: string;
  name: string;
}

const modelImages: IAIModel[] = [
  { src: "/assets/popularModels/llama.png", alt: "LLaMA", name: "LLaMA" },
  { src: "/assets/popularModels/deepseek.png", alt: "Deepseek", name: "Deepseek" },
  { src: "/assets/popularModels/Bloomai-new-logo.png", alt: "Bloomai", name: "Bloomai" },
  { src: "/assets/popularModels/cohere.png", alt: "Cohere", name: "Cohere" },
  { src: "/assets/popularModels/Mistral.png", alt: "Mistral", name: "Mistral" },
  { src: "/assets/popularModels/Gemma.png", alt: "Gemma", name: "Gemma" },
  { src: "/assets/popularModels/Bhashini.png", alt: "Bhashini", name: "Bhashini" },
  { src: "/assets/popularModels/wen.png", alt: "Qwen", name: "Qwen" },
];

const handleImageError = () => {
  console.warn("Image failed to load.");
};

const MidSection = () => {
  return (
    <>
      <div className="PopularModelsSection">
        <h1 className={`text-4xl ${Styles.commonHeading}`}>
          Wide Range of Popular Open Source Models
        </h1>

        <h6 className="my-8 text-white">
          Run top Open-Source Models like{" "}
          <span className="text-[#B4E600]">
            Llama-4, Deepseek R1 & many more
          </span>{" "}
          up to 4× faster than vLLM — 2× faster than Bedrock and Azure AI.
        </h6>

        <div className="ModelSectionButton">
          <ButtonClass buttonText="Get Started" />
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            navigation={true}
            className="features-swiper-container"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 3, spaceBetween: 15 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {modelImages.map((model) => (
              <SwiperSlide key={model.name} className="flex justify-center">
                <div className="bg-white rounded-lg p-3 h-[60px] w-[140px] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200">
                  <Image
                    width={120}
                    height={40}
                    src={model.src}
                    alt={model.alt}
                    className="max-h-[40px] max-w-[120px] object-contain"
                    onError={handleImageError}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <section className="platformHighlights text-center py-16">
        <h1 className={`text-4xl ${Styles.commonHeading}`}>
          Built for Efficient AI Performance
        </h1>
      </section>
    </>
  );
};

export default MidSection;
