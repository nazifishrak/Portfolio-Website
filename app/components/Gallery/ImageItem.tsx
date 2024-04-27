import React from 'react';

const ImageItem = (prop:{src:string}) => {
    return (
        <div>
            <img className="h-auto max-w-full rounded-lg grayscale hover:grayscale-0"
                 src={prop.src} alt=""/>
        </div>
    );
};

export default ImageItem;