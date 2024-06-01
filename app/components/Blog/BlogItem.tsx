import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

// @ts-ignore
const BlogItem = ({title, content, imageUrl, slug, category }) => {
    const truncateContent = (content: string, maxLength: number) => {
        return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
    };

    return (
        <Link className="container mx-auto p-4 block hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300 ease-in-out rounded-lg" href={`/blog/${slug}`}>
            
                <div className="flex flex-col md:flex-row md:space-x-12 p-6 rounded-lg transition-shadow duration-300 ease-in-out">
                    {imageUrl && (
                        <div className="mb-4 md:mb-0">
                            <div className="rounded-xl border-4 border-blue-500 shadow-lg shadow-blue-500">
                                <Image
                                    // src={'https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
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
                        <h1 className="text-3xl font-bold text-gray-600 mb-4 dark:text-white hover:text-pink-600">{title}</h1>
                        <p className="max-w-lg text-left mb-4 text-xl font-thin leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">
                            <Markdown>
                                {truncateContent(content, 250)}
                            </Markdown>

                        </p>
                        <span
                            className="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">{category}
                        </span>
                    </div>
                </div>
        </Link>
    );
};

export default BlogItem;
