'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Loading from '../../loading';
import PasswordForm from "@/app/components/Admin Panels/PasswordForm";

const UpdateBlog = () => {

    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const correctPassword = 'admin';

    const handlePasswordSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const { slug } = useParams();
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [blogSlug, setBlogSlug] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blog/${slug}`);
                const data = await response.json();
                setBlogTitle(data.blogTitle);
                setBlogContent(data.blogContent);
                setPictureUrl(data.pictureUrl);
                setBlogSlug(data.slug);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const updatedBlog = {
            blogTitle,
            blogContent,
            pictureUrl,
            slug: blogSlug,
        };

        try {
            const response = await fetch(`/api/blog/${slug}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBlog),
            });

            if (response.ok) {
                alert('Blog updated successfully');
            } else {
                console.error('Failed to update blog');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    if (loading) {
        return <Loading />
    }

    return (
        !isAuthenticated ? (
            <PasswordForm
                password={password}
                setPassword={setPassword}
                handlePasswordSubmit={handlePasswordSubmit} />
        ) : (
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
                        <button type="submit" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Blog</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default UpdateBlog;
