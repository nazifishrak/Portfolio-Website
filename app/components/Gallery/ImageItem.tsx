import React from 'react';
import Image from 'next/image';
const ImageItem = (prop:{src:string}) => {
    return (
        <div>
            <Image
                layout="responsive"
                width={700}
                height={475}
                className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0"
                 src={prop.src} alt=""/>
        </div>
    );
};

export default ImageItem;