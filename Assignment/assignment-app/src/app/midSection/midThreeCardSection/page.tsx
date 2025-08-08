import React from 'react'
import Image from 'next/image';
import Styles from '../../../Styles/centerHeading-Style.module.css';

interface MidCardSectionProps {
    heading: string;
    subheading: string;
    src: string;
    alt: string;
}

const allCards: MidCardSectionProps[] = [
    {
        src: "/assets/threeCardImages/cardImage1.svg",
        heading: "Deploy AI Models Without the Hassle",
        subheading: "Samavesh AI lets you launch, manage, and scale your inference workloads in one streamlined platform.",
        alt: "High Performance"

    },
    {
        src: "/assets/threeCardImages/cardImage2.svg",
        heading: "Seamless, Secure Model Integration",
        subheading: "Our platform ensures your models are deployed securely with full control over data and performance.",
        alt: "High Performance"
    },
    {
        src: "/assets/threeCardImages/cardImage3.svg",
        heading: "Monitor Inference with Full Clarity",
        subheading: "Get detailed performance insights and cost tracking to optimize AI usage and budget efficiently.",
        alt: "High Performance"

    }
]
const MidCardSection = () => {
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
            <div className="cardContainer flex flex-wrap justify-evenly gap-4 mt-14">
                {allCards.map((card) => (
                    <div className="card max-w-[400px]" key={card.heading}>
                        <div className="cardImage">
                            {card.src ? (
                                <Image
                                    width={400}
                                    height={200}
                                    src={card.src}
                                    alt={card.alt}
                                    onError={handleImageError}
                                />
                            ) : null}
                        </div>
                        <div className="cardContent flex flex-col items-center text-center  mt-4">
                            <h3 className={`${Styles.cardHeading} text-xl`}>
                                {card.heading}
                            </h3>

                            <p className={`${Styles.cardSubHeading}`}>
                                {card.subheading}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default MidCardSection