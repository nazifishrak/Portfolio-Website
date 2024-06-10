"use client";

import { Metadata } from 'next';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialOceanic, atomDark, dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import BlogType from "@/app/lib/constants";


interface BlogPostProps {
  params: {
    slug: string;
  };
}



const BlogPost = ({ params }: BlogPostProps) => {
  const { slug } = params;
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (response.ok) {
        const data: BlogType = await response.json();
        setBlog(data);
      } else {
        setBlog(null);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
      <div className="container mx-auto p-4 md:p-8 rounded-lg">
        {/*<h1 className="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">*/}
        {/*<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-pink-400 dark:from-sky-300 dark:to-slate-400">*/}
        {/*  {blog.blogTitle}*/}
        {/*</span>*/}
        {/*</h1>*/}
        <h1 className="mb-4 text-center  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{blog.blogTitle.slice(0,20)}<span
              className="underline underline-offset-2 decoration-4 lg:decoration-8 decoration-indigo-400 dark:decoration-blue-600">{blog.blogTitle.slice(21,)}</span>
        </h1>


        <Markdown
            className="prose prose-lg dark:prose-dark max-w-3xl text-gray-700 dark:text-gray-300 mx-auto"
            options={{
              overrides: {
                h1: {
                  component: 'h1',
                  props: {
                    className: 'text-4xl font-bold text-gray-800 dark:text-white mb-4',
                  },
                },
                h2: {
                  component: 'h2',
                  props: {
                    className: 'text-3xl font-semibold text-gray-800 dark:text-white mb-3',
                  },
                },
                h3: {
                  component: 'h3',
                  props: {
                    className: 'text-2xl font-medium text-gray-800 dark:text-white mb-2',
                  },
                },
                p: {
                  component: 'p',
                  props: {
                    className: 'text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6',
                  },
                },
                img: {
                  component: 'img',
                  props: {
                    className: 'custom-img mx-auto rounded-lg object-cover shadow-lg mb-6',
                  },
                },
                a: {
                  component: 'a',
                  props: {
                    className: 'text-blue-600 dark:text-blue-400 hover:underline',
                  },
                },
                ul: {
                  component: 'ul',
                  props: {
                    className: 'list-disc list-inside mb-6',
                  },
                },
                ol: {
                  component: 'ol',
                  props: {
                    className: 'list-decimal list-inside mb-6',
                  },
                },
                li: {
                  component: 'li',
                  props: {
                    className: 'mb-2',
                  },
                },
                code: {
                  component: ({className, children}) => {
                    const language = className ? className.replace('lang-', '') : '';
                    console.log(language)
                    return (
                        <SyntaxHighlighter style={dracula} language={language}>
                          {children}
                        </SyntaxHighlighter>
                    );
                  },
                },
              },
            }}
        >
          {blog.blogContent}
        </Markdown>
      </div>
  );
};

export default BlogPost;