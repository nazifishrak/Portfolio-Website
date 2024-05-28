// app/blog/[slug]/page.tsx

import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/blogs/blog.models';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = params;

  await connectToDatabase();

  const blog = await Blog.findOne({ slug: slug })

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: blog.blogTitle,
    description: blog.blogContent.slice(0, 150),
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { slug } = params;

  await connectToDatabase();

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-600 mb-4 dark:text-white hover:text-pink-600">{blog.blogTitle}</h1>
      {blog.pictureUrl && <img src={blog.pictureUrl} alt={blog.blogTitle} className="mb-4 rounded-lg" />}
      <ReactMarkdown className="prose dark:prose-dark">{blog.blogContent}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
