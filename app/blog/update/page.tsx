'use client';
import React, { useEffect, useState } from 'react';
import Loading from "@/app/blog/loading";
import BlogItemUpdate from "@/app/components/Blog/BlogItemUpdate";
import BlogType from "@/app/lib/constants";

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blog');
                const data: BlogType[] = await response.json();
                setBlogs(data);
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setLoading(false); // Set loading to false in case of an error
            }
        };
        fetchBlogs();
    }, []);

    if (loading) {
        return <Loading />; // Show loading indicator if loading
    }

    return (
        <div>
            <h1 className="text-center mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">My Notebook</span>
            </h1>

            <ul className="space-y-8">
                {blogs.map((blog) => (
                    <BlogItemUpdate
                        key={blog.slug}
                        title={blog.blogTitle}
                        content={blog.blogContent}
                        imageUrl={blog.pictureUrl}
                        slug={blog.slug}
                        category={blog.blogCategory}
                    />
                ))}
            </ul>
        </div>
    );
}
