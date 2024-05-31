'use client';
import React from 'react';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import {useRouter} from "next/navigation";

// @ts-ignore
const BlogItemUpdate = ({ id, title, content, imageUrl, slug }) => {
    const router = useRouter();
    const truncateContent = (content: string, maxLength: number) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    return (
        <div className="container mx-auto p-4 block hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300 ease-in-out rounded-lg">
            <div className="flex flex-col md:flex-row md:space-x-12 p-6 rounded-lg transition-shadow duration-300 ease-in-out">
                {imageUrl && (
                    <div className="mb-4 md:mb-0">
                        <div className="rounded-xl border-4 border-blue-500 shadow-lg shadow-blue-500">
                            <Image
                                src={imageUrl}
                                width={400}
                                height={400}
                                className="rounded-lg"
                                alt="Blog Image"
                            />
                        </div>
                    </div>
                )}
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold text-gray-600 mb-4 dark:text-white hover:text-pink-600">
                        {title}
                    </h1>
                    <p className="max-w-lg text-left mb-4 text-xl font-thin leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">
                        <Markdown>
                            {truncateContent(content, 250)}
                        </Markdown>
                        <br></br>

                            <Link href={`/blog/update/${slug}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                                <span className="sr-only">Icon description</span>
                            </Link>

                        <Link href={``} onClick={async ()=>{fetch(`/api/blog/${slug}`, {method: 'DELETE'}).then((res)=> router.push("/blog/"))}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                      clipRule="evenodd"/>
                            </svg>


                            <span className="sr-only">Icon description</span>
                        </Link>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogItemUpdate;
