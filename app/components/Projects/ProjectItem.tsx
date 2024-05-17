import React from 'react';
import Image from "next/image";

// @ts-ignore
const ProjectItem = ({imageUrl, title, desc}) => {
    return (

        <div>
            <div className={`flex flex-col md:flex-row md:space-x-12`}>
                <div className={`md:w-1/2`}>

                    <Image src={imageUrl}
                            width={400}
                           height={400}
                           className={`rounded-xl shadow-xl hover: opacity-70`}

                           alt={"Image"}/>

                </div>

                <div>
                    <div className={`md:w-1/2`}>
                        <h1 className={`text-4xl font-bold mb-6`}>{title}</h1>
                        <p className={`text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400`}>{desc}</p>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProjectItem;