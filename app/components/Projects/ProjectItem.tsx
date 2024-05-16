import React from 'react';
import Image from "next/image";

// @ts-ignore
const ProjectItem = ({title, desc}) => {
    return (

        <div>
            <div className={`flex flex-col md:flex-row md:space-x-12`}>
                <div className={`md:w-1/2`}>
                    <Image src={`https://images.unsplash.com/photo-1714200408842-1e63e594bc3f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D`}
                            width={1000}
                           height={1000}
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