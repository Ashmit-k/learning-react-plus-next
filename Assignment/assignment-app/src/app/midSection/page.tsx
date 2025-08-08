"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import ButtonClass from "../utilities/buttons/button";
import Styles from "../../Styles/centerHeading-Style.module.css";
import MidCardSection from "./midThreeCardSection/page";
import MidExperience from "./midExperienceSection/page";

interface IAIModel {
  src: string;
  alt: string;
  name: string;
}

const modelImages: IAIModel[] = [
  { src: "/assets/popularModels/llama.png", alt: "LLaMA", name: "LLaMA" },
  {
    src: "/assets/popularModels/deepseek.png",
    alt: "Deepseek",
    name: "Deepseek",
  },
  {
    src: "/assets/popularModels/Bloomai-new-logo.png",
    alt: "Bloomai",
    name: "Bloomai",
  },
  { src: "/assets/popularModels/cohere.png", alt: "Cohere", name: "Cohere" },
  { src: "/assets/popularModels/Mistral.png", alt: "Mistral", name: "Mistral" },
  { src: "/assets/popularModels/Gemma.png", alt: "Gemma", name: "Gemma" },
  {
    src: "/assets/popularModels/Bhashini.png",
    alt: "Bhashini",
    name: "Bhashini",
  },
  { src: "/assets/popularModels/wen.png", alt: "Qwen", name: "Qwen" },
];

const MidSection = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const nextSibling = target.nextSibling as HTMLElement;
    if (nextSibling) nextSibling.style.display = "block";
  };

  return (
    <>
      <section className="pt-[120px] pb-16 bg-[#000000] PopularModelsSection">
        <div className="container mx-auto px-4">
          <h1
            className={`text-4xl text-center text-white ${Styles.commonHeading}`}
          >
            Wide Range of Popular Open Source Models
          </h1>

          <p className="my-8 text-white text-center max-w-4xl mx-auto">
            Run top Open-Source Models like{" "}
            <span className="text-[#B4E600] font-semibold">
              Llama-4, Deepseek R1
              & many more</span> up
            to 4× faster than vLLM — 2× faster than Bedrock and Azure AI.
          </p>

          <div className="flex justify-center mb-12">
            <ButtonClass buttonText="Get Started Info" />
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
                el: ".custom-pagination",
                clickable: true,
                dynamicBullets: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
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
                    {model.src ? (
                      <Image
                        width={120}
                        height={40}
                        src={model.src}
                        alt={model.alt}
                        className="max-h-[40px] max-w-[120px] object-contain"
                        onError={handleImageError}
                      />
                    ) : null}
                    <span
                      className={`text-gray-800 font-semibold text-sm ${model.src ? "hidden" : "block"
                        }`}
                      style={{ display: model.src ? "none" : "block" }}
                    >
                      {model.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ✅ Custom Navigation */}
            <div className="custom-prev absolute top-7 left-3 -translate-y-1/2 cursor-pointer text-xl font-bold z-10">←</div>
            <div className="custom-next absolute top-7 right-16 -translate-y-1/2 cursor-pointer text-xl font-bold z-10">→</div>
            {/* 
            {/* ✅ Custom Pagination */}
            <div className="custom-pagination flex justify-center mt-4 gap-2 "></div>
          </div>
        </div>
      </section>

      <section className="platformHighlights text-center py-16">
        <h1 className={`text-4xl ${Styles.commonHeading}`}>
          Built for Efficient AI Performance
        </h1>
        <h6 className={`${Styles.commonSubHeading} text-white mt-4`}>
          Samavesh AI brings powerful features tailored to supercharge your inference workloads at scale.
        </h6>
        <MidCardSection />
        <MidExperience />
      </section>
    </>
  );
};

export default MidSection;