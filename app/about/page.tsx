import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-col items-center min-h-screen py-10 ">
            <h1 className="text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-2 text-white bg-pink-500 rounded dark:bg-pink-500">Know</mark>
                Me
            </h1>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hey there! I'm Nazif Ishrak, a computer science student at the University of British Columbia (UBC) in
                Vancouver, Canada. Originally from Dhaka, Bangladesh, my journey to UBC has been filled with incredible
                opportunities and learnings.


            </p>

            <Image src={"https://i.imgur.com/KQE9uLZ.jpg"}
                   alt={"Nazif Ishrak"} width={300} height={100} className="rounded-lg"/>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I've had the chance to work with amazing teams at Broadridge, D-Wave Quantum Systems, and Pathao
                Limited, where I honed my skills in product management, data engineering, and systems analysis. I also
                enjoy teaching and mentoring, having served as a Teaching Assistant at UBC and a Coding Instructor at
                Don Valley West.
            </p>

            <Image src={"https://i.imgur.com/hrscq9E.jpeg"}
                   alt={"ILOT Scholars"} width={500} height={300} className="rounded-lg"/>
            <p className={"italic font-thin"}>International Scholars UBC</p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Outside of my professional life, I'm an avid learner and explorer. I love diving into new technologies
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                and methodologies, constantly pushing myself to grow. When I'm not coding or studying, you can find me
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                with friends, eating, or exploring British Columbia's beautiful outdoors.
            </p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                This website is my personal playground where I don my creative developer hat. While it might look like a
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                simple portfolio with nice aesthetics on the surface, it's much more than that. Behind the scenes, I
                strive to implement community-standard approaches, constantly learning and applying new techniques to
                enhance my skills.


            </p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoy creating it.
            </p>
        </div>
    );
};

export default About;
