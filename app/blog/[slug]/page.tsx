// app/blog/[slug]/page.tsx

import { Metadata } from 'next';
import Markdown from 'markdown-to-jsx';
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/blogs/blog.models';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

interface BlogType {
  blogTitle: string;
  blogContent: string;
  pictureUrl: string;
  slug: string;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = params;

  await connectToDatabase();

  // @ts-ignore
  const blog: BlogType = await Blog.findOne({ slug: slug })

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

  // @ts-ignore
  const blog :BlogType = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // @ts-ignore
  return (


      <div className="container mx-auto p-4  md:p-8  rounded-lg shadow-md">


        <h1 className="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">

          <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-pink-400 dark:from-sky-300 dark:to-slate-400">
    {blog.blogTitle}
</span>

        </h1>


        <Markdown
            className="prose prose-lg dark:prose-dark max-w-3xl text-gray-700 dark:text-gray-300 mx-auto"
            options={{
              overrides: {
                h1: {
                  component: 'h1',
                  props: {
                    className: 'text-4xl font-bold text-gray-800 dark:text-white mb-4'
                  }
                },
                h2: {
                  component: 'h2',
                  props: {
                    className: 'text-3xl font-semibold text-gray-800 dark:text-white mb-3'
                  }
                },
                h3: {
                  component: 'h3',
                  props: {
                    className: 'text-2xl font-medium text-gray-800 dark:text-white mb-2'
                  }
                },
                p: {
                  component: 'p',
                  props: {
                    className: 'text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6'
                  }
                },
                img: {
                  component: 'img',
                  props: {
                    className: 'custom-img mx-auto rounded-lg object-cover shadow-lg mb-6'
                  }
                },
                a: {
                  component: 'a',
                  props: {
                    className: 'text-blue-600 dark:text-blue-400 hover:underline'
                  }
                },
                ul: {
                  component: 'ul',
                  props: {
                    className: 'list-disc list-inside mb-6'
                  }
                },
                ol: {
                  component: 'ol',
                  props: {
                    className: 'list-decimal list-inside mb-6'
                  }
                },
                li: {
                  component: 'li',
                  props: {
                    className: 'mb-2'
                  }
                }
              }
            }}
        >
          {blog.blogContent}
        </Markdown>
      </div>


  );
};

export default BlogPost;
