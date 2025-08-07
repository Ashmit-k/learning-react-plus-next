'use client';

import React from 'react';

interface SwiperImageProps {
    imageUrl: string;
}

const SwiperImage: React.FC<SwiperImageProps> = ({ imageUrl }) => {
    return (
        <div className="bg-white w-36 h-14 rounded shadow flex items-center justify-center p-2 hover:scale-105 transition">
            <img
                src={imageUrl}
                alt="Model"
                className="w-full h-full object-contain rounded"
            />
        </div>
    );
};

export default SwiperImage;
