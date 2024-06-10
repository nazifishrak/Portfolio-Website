'use client';
import React, { useEffect, useState } from 'react';
import BlogItem from "@/app/components/Blog/BlogItem";
import Loading from "./loading"
import BlogType from "@/app/lib/constants";

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [categoryFilter, setCategoryFilter] = useState('all');
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

            <div className="flex pr-10 justify-end">
                <select
                    className="w-1/12  bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="category"
                    id="category"
                    value={categoryFilter}
                onChange={(e)=>{setCategoryFilter(e.target.value)}}>

                    {/*Next steps to make this dynamic. For now keeping it static*/}
                    <option value="all">All</option>
                    <option value="tech">Tech</option>
                    <option value="coding">Coding</option>
                    <option value="personal">Personal</option>x
                </select>
            </div>

            <ul className="space-y-8">
                {blogs.map((blog) => {
                    if (categoryFilter === 'all' || blog.blogCategory === categoryFilter) {
                        return (
                            <BlogItem
                                key={blog.slug}
                                title={blog.blogTitle}
                                content={blog.blogContent}
                                imageUrl={blog.pictureUrl}
                                slug={blog.slug}
                                category={blog.blogCategory}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
