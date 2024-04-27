import React from 'react';
import SvgIcon from "@/app/components/TimeLine/SVGIcon";
import TimelineItem from "@/app/components/TimeLine/TimelineItem";

import companyLogos from "./companyUrls"
const Timeline = ({cname}:{cname:string}) => {
    return (<div className={`px-4 sm:px-8 md:px-20 pt-6`}>

            <h1 className="mb-4 text-2xl  font-semibold text-gray-500 leading-none tracking-tight  md:text-3xl lg:text-3xl dark:text-white">Work <span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-300">Experience </span>
                </h1>

            <div className={cname}>

                <ol className="relative text-left border-s border-blue-600 dark:border-white mx-auto pt-5">

                    <TimelineItem icon={companyLogos["Broadridge"]} title={"Product Management Intern"}
                                  date={"September 2023 – April 2024"} company={" Broadridge"}/>

                    <TimelineItem icon={companyLogos["Algorithmics"]} title={"Coding Instructor"}
                                  date={" May 2023 – Present"}
                                  company={"Algorithmics"}/>

                    <TimelineItem icon={companyLogos["UBCrez"]} title={"Residence Advisor"}
                                  date={"August 2023 – Present"}
                                  company={"UBC Student Housing"}/>

                    <TimelineItem icon={companyLogos["D Wave"]} title={"Business Systems Analyst Co-Op"}
                                  date={"September 2023 – April 2024"} company={" D-Wave Quantum Systems Inc."}/>


                    <TimelineItem icon={companyLogos["UBC"]} title={"Teaching Assistant"}
                                  date={"September 2022 – April 2023"}
                                  company={"University of British Columbia"}/>


                    <TimelineItem icon={companyLogos["Pathao"]} title={"Data Engineer Intern"}
                                  date={"May 2023 – August 2023"}
                                  company={"Pathao Limited"}/>


                </ol>
            </div>


        </div>

    );
};

export default Timeline;
