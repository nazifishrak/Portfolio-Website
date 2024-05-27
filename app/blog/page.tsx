'use client';
import React, { useEffect, useState } from 'react';
import BlogItem from "@/app/components/Blog/BlogItem";

interface Blog {
    _id: string;
    blogTitle: string;
    blogContent: string;
    pictureUrl: string;
}

export default function Blog() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blog');
            const data: Blog[] = await response.json();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1 className="text-center mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Our Blog</span>
            </h1>

            <ul className="space-y-8">
                {blogs.map((blog) => (
                    <BlogItem
                        title={blog.blogTitle}
                        content={blog.blogContent}
                        imageUrl={blog.pictureUrl}
                        key={blog._id}
                    />
                ))}
            </ul>
        </div>
    );
}
