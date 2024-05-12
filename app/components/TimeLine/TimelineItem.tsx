import React from 'react';
import SvgIcon from "@/app/components/TimeLine/SVGIcon";

const TimelineItem = (prop:{icon: string, title: string, date: string, company: string, url:string}) => {
    return (
        <li className="mb-10 ms-6 ">
            <a href={prop.url}>
                    <span
                        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-gray-200 dark:ring-slate-800 dark:bg-blue-900">
                            {/*<SvgIcon icon={prop.icon}/>*/}
                        <img className={" h-6 inline rounded-full"}
                             src={prop.icon}/>
                    </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {prop.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {prop.date}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {prop.company}
            </p>
            </a>
        </li>
    );
};

export default TimelineItem;