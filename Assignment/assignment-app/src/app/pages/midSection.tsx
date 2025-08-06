'use client'

import React from 'react'
import Styles from '../Styles/centerHeading-Style.module.css'
import SwiperImage from '../components/swiperImage'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import { Button } from '@mui/material'
import ButtonClass from '../utilities/buttons/button'

const MidSection = () => {

    const modelImages = [
        "/assets/popularModels/llama.png",
        "/assets/popularModels/deepseek.png",
        "/assets/popularModels/Bloomai-new-logo.png",
        "/assets/popularModels/cohere.png",
        "/assets/popularModels/Mistral.png",
        "/assets/popularModels/Gemma.png",
        "/assets/popularModels/Bhashini.png",
        "/assets/popularModels/wen.png"
    ]
    return (
        <>
            <div className="PopularModelsSection">
                <h1 className={`text-4xl ${Styles.commonHeading}`} >Wide Range of Popular Open Source Models</h1>

                <h6 className='my-8 text-white'>Run top Open-Source Models like <span className='text-[#B4E600]'> Llama-4, Deepseek R1 & many more</span> up to 4× faster than vLLM — 2× faster than Bedrock and Azure AI.</h6>

                <div className="ModelSectionButton">
                    <ButtonClass buttonText='Get Started' />
                </div>

                <div className="swiperImages flex gap-4 my-10">
                    {modelImages.map((location, index) => (
                        <SwiperImage key={index} imageUrl={location} />
                    ))}
                </div>
            </div>

            <div className="platformHighlights">
                <h1 className={`text-4xl my-16 ${Styles.commonHeading}`}>Built for Efficient AI Performance</h1>
            </div>

        </>
    )
}

export default MidSection