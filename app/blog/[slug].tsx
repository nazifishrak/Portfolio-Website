// creating an individual blog post page where I will fetch the blog post by id and display it.

import ReactMarkdown from 'react-markdown';
import connectToDatabase from '../lib/mongodb';
import Blog from '../models/blogs/blog.models';

const BlogPost = ({ param }: {param: {slug: string}}) => {
    let blog;
    (async () =>{try {
        await connectToDatabase();
         blog = await Blog.findOne({slug: param.slug});
        
        
    } catch (error) {
        console.error('Error fetching blogs:', error);
        ;
    }})()

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-600 mb-4 dark:text-white hover:text-pink-600">Blog Content</h1>
            <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
    );
}
