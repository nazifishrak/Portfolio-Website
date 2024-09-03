"use client"

import React from 'react';
import Typewriter from "typewriter-effect";
import MyAvatar from "@/app/components/Hero/MyAvatar";
import {VT323} from "next/font/google";
import SvgIcon from "@/app/components/TimeLine/SVGIcon";

const mono = VT323({subsets: ["latin"], weight: "400"});

const Hero = () => {
    return (
        <div>


            <div className={`flex flex-row w-full`}>
                <section className="ml-2 pl-12">
                    <div className="ml-2 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        {/*${mono.className} --> This was for my old robotic text*/}
                        <h1 className={` mb-4 text-5xl font-bold tracking-tight leading-none text-gray-800 md:text-7xl lg:text-8xl dark:text-white `}>
                            <Typewriter
                                options={{
                                    strings: ["hey, I'm  nazif!"],
                                    autoStart: true,
                                    deleteSpeed: 1000000000,
                                    loop: false,


                                }}
                            />
                        </h1>
                        <p className="text-left mb-4 text-xl font-thin leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">I
                            am a CS Major at UBC.
                            <br/>
                            Passionate about <span
                                className="underline underline-offset-2 decoration-2 decoration-blue-400 dark:decoration-blue-600 md:decoration-4 md:underline-offset-4 lg:decoration-4 lg:underline-offset-4 "></span>
                                Machine Learning, building fast programs, and guiding product development 
                            <br/>
                            I like to code for fun
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="https://github.com/nazifishrak"
                               className="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Github
                                <SvgIcon icon={"git"}/>

                            </a>
                            <a href="https://calendar.app.google/25rckNJQ5TviQWHM6"
                               className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                                Coffee Chat ☕️
                            </a>
                        </div>
                    </div>
                </section>
                <MyAvatar/>


            </div>

        </div>
    );
};

export default Hero;