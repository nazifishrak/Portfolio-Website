import React from 'react';
import Image from "next/image";

// @ts-ignore
const ProjectItem = ({ imageUrl, title, desc, language, url, date}) => {
    date = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row md:space-x-12  p-6 rounded-lg transition-shadow duration-300 ease-in-out">
                <div className=" mb-4 md:mb-0">
                    <div className="rounded-xl border-4 border-blue-500 shadow-lg shadow-blue-500">
                        <Image
                            src={imageUrl}
                            width={400}
                            height={400}
                            className="rounded-lg"
                            alt="Project Image"
                        />
                    </div>
                </div>
                <div className="md:w-2/3">
                    <a href={url}>
                        <h1 className="text-3xl font-bold text-gray-600 mb-4 dark:text-white hover:text-pink-600">{title}</h1>
                    </a>

                    <p className="text-left mb-4 text-xl font-thin leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">{desc}</p>
                    <span
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{language}
                    </span>
                    <span
                        className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{`Last Commit: ${formattedDate}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
