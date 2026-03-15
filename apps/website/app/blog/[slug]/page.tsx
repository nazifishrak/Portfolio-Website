import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link 
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors no-underline flex items-center gap-2 mb-6"
        >
          &larr; Back to blog
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-sm text-muted-foreground block" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        )}
      </div>
      
      <div className="mt-8 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-xl">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
