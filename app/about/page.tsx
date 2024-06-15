import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <div className="px-10 flex flex-col items-center min-h-screen py-10 ">
            <h1 className="text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <mark className="px-2 text-white bg-pink-500 rounded dark:bg-pink-500">Know</mark>
                Me
            </h1>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hello! I'm Nazif Ishrak, a passionate computer science student at the University of British Columbia (UBC) in the vibrant city of Vancouver, Canada. My journey began in Dhaka, Bangladesh, where my love for technology and problem-solving took root.


            </p>

            <Image
                // src={"https://i.imgur.com/KQE9uLZ.jpg"}
                src={"https://i.imgur.com/kkjMppQ.jpeg"}
                   alt={"Nazif Ishrak"} width={300} height={80} className="rounded-lg"/>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I've had the opportunity to dive into various realms of technology, working with innovative teams at Broadridge, D-Wave Quantum Systems, and Pathao Limited. These experiences have sharpened my skills in product management, data engineering, and systems analysis, making me a versatile tech enthusiast.
            </p>

            <Image
                src={"https://i.imgur.com/hrscq9E.jpeg"}
                   alt={"ILOT Scholars"} width={500} height={300} className="rounded-lg"/>
            <p className={"italic font-thin"}>International Scholars UBC</p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                One of my greatest joys is sharing knowledge. As a Teaching Assistant at UBC and a Coding Instructor at Algorithmics, I've had the privilege of mentoring aspiring techies and witnessing their growth firsthand.
            </p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                I live by the motto "Learn, Create, Inspire." I'm always on the lookout for new technologies and methodologies, pushing my boundaries and striving to inspire others through my journey. When I'm not immersed in the digital world, you'll find me exploring nature, savoring new cuisines, or enjoying time with friends.

            </p>

            <p className="max-w-sm md:max-w-2xl lg:max-w-2xl font-light text-xl text-justify mb-8 text-gray-700 dark:text-gray-300">
                This website is more than just a portfolio—it's my creative playground. Here, I experiment with cutting-edge technologies and showcase projects that reflect my dedication to excellence and innovation. It's a testament to my belief in continuous learning and the joy of creation.

                Thank you for stopping by. I hope you enjoy exploring my work as much as I enjoy bringing it to life.
            </p>
        </div>
    );
};

export default About;
