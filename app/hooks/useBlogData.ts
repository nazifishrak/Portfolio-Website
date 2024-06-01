"use client";
import { useEffect, useState } from 'react';

const useBlogData = (slug: string | string[]) => {
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [blogSlug, setBlogSlug] = useState('');
    const [blogCategory, setBlogCategory] = useState('');
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
                setBlogCategory(data.blogCategory);
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
            blogCategory,
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

    return { blogTitle, setBlogTitle, blogContent, setBlogContent, pictureUrl, setPictureUrl, blogSlug, setBlogSlug, blogCategory, setBlogCategory,  loading, handleSubmit };
};

export default useBlogData;
