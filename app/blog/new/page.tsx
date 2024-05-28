'use client';
import { useState } from 'react';

const NewBlog = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const correctPassword = 'admin'; // Replace this with your actual password

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('blogTitle', blogTitle);
        formData.append('blogContent', blogContent);
        formData.append('pictureUrl', pictureUrl);
        formData.append('slug', slug); // Append slug to form data

        const response = await fetch('/api/blog', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const newBlog = await response.json();
            console.log('New Blog Created: ', newBlog);
            // Optionally, reset form fields or navigate to a different page
            setBlogTitle('');
            setBlogContent('');
            setPictureUrl('');
            setSlug('');
        } else {
            console.error('Failed to create new blog');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            {!isAuthenticated ? (
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-3xl font-extrabold text-center text-gray-900">Enter Password</h2>
                    <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Submit</button>
                    </form>
                </div>
            ) : (
                <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
                    <h1 className="mb-4 text-4xl font-extrabold text-center text-gray-900">Create New Blog</h1>
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
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500'
                                required
                            />
                        </div>
                        <button type="submit" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">Create Blog</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default NewBlog;
