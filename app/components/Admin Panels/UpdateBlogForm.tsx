'use client';
import React from 'react';
import Markdown from 'react-markdown';

interface BlogFormProps {
    blogTitle: string;
    setBlogTitle: (value: string) => void;
    blogContent: string;
    setBlogContent: (value: string) => void;
    pictureUrl: string;
    setPictureUrl: (value: string) => void;
    blogSlug: string;
    setBlogSlug: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({
                                               blogTitle,
                                               setBlogTitle,
                                               blogContent,
                                               setBlogContent,
                                               pictureUrl,
                                               setPictureUrl,
                                               blogSlug,
                                               setBlogSlug,
                                               handleSubmit,
                                           }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-4xl font-extrabold text-center text-gray-900">Update Blog</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="blogTitle" className="block mb-2 text-sm font-medium text-gray-900">Blog Title</label>
                        <input
                            type="text"
                            id="blogTitle"
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="blogContent" className="block mb-2 text-sm font-medium text-gray-900">Blog Content</label>


                        <textarea
                            id="blogContent"
                            value={blogContent}
                            onChange={(e) => setBlogContent(e.target.value)}
                            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            required
                            rows={6}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="pictureUrl" className="block mb-2 text-sm font-medium text-gray-900">Picture URL</label>
                        <input
                            type="text"
                            id="pictureUrl"
                            value={pictureUrl}
                            onChange={(e) => setPictureUrl(e.target.value)}
                            className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                    <div>
                        <label htmlFor='slug' className='block mb-2 text-sm font-medium text-gray-900'>Slug</label>
                        <input
                            type='text'
                            id='slug'
                            value={blogSlug}
                            onChange={(e) => setBlogSlug(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500'
                            required
                        />
                    </div>
                    <button type="submit" className="py-3 px-5 sm:ml-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Blog</button>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
