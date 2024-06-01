'use client';
import { useState } from 'react';
import BlogForm from '@/app/components/Admin Panels/BlogForm';
import PasswordForm from "@/app/components/Admin Panels/PasswordForm";

const NewBlog = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;

    const handlePasswordSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('blogTitle', blogTitle);
        formData.append('blogContent', blogContent);
        formData.append('pictureUrl', pictureUrl);
        formData.append('slug', slug);
        formData.append('blogCategory', blogCategory)

        const response = await fetch('/api/blog', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const newBlog = await response.json();
            console.log('New Blog Created: ', newBlog);
            alert('New blog created successfully');
            setBlogTitle('');
            setBlogContent('');
            setPictureUrl('');
            setSlug('');
            setBlogCategory('');
        } else {
            console.error('Failed to create new blog');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            {!isAuthenticated ? (
                <PasswordForm
                    password={password}
                    setPassword={setPassword}
                    handlePasswordSubmit={handlePasswordSubmit}
                />
            ) : (
                <BlogForm
                    blogTitle={blogTitle}
                    setBlogTitle={setBlogTitle}
                    blogContent={blogContent}
                    setBlogContent={setBlogContent}
                    pictureUrl={pictureUrl}
                    setPictureUrl={setPictureUrl}
                    slug={slug}
                    setSlug={setSlug}
                    blogCategory={blogCategory}
                    setBlogCategory={setBlogCategory}
                    handleSubmit={handleSubmit}

                />
            )}
        </div>
    );
};

export default NewBlog;
