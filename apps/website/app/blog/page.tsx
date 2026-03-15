import Link from 'next/link';
import { getSortedPostsData } from '../../lib/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest blocks and thoughts.',
};

export default function BlogList() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          My thoughts, tutorials, and deep-dives into various topics.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:bg-card/80 hover:border-primary/50 group-hover:shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              {post.date && (
                <time className="text-sm text-muted-foreground" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              )}
              {post.summary && (
                <p className="text-muted-foreground mt-2">{post.summary}</p>
              )}
            </div>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-muted-foreground">No posts found.</p>
        )}
      </div>
    </div>
  );
}
