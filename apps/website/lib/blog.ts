import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPostMetadata = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

export function getSortedPostsData(): BlogPostMetadata[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".mdx" or ".md" from file name to get id
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        title: matterResult.data.title || slug.replace('-', ' '),
        date: matterResult.data.date || '',
        summary: matterResult.data.summary || '',
        ...(matterResult.data as Omit<BlogPostMetadata, 'slug' | 'title' | 'date' | 'summary'>),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(slug: string): BlogPost | undefined {
  try {
    const fullPathMDX = path.join(contentDirectory, `${slug}.mdx`);
    const fullPathMD = path.join(contentDirectory, `${slug}.md`);

    let fileContents: string;
    if (fs.existsSync(fullPathMDX)) {
      fileContents = fs.readFileSync(fullPathMDX, 'utf8');
    } else if (fs.existsSync(fullPathMD)) {
      fileContents = fs.readFileSync(fullPathMD, 'utf8');
    } else {
      return undefined;
    }

    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      title: matterResult.data.title || slug.replace('-', ' '),
      date: matterResult.data.date || '',
      summary: matterResult.data.summary || '',
      ...(matterResult.data as Omit<BlogPostMetadata, 'slug' | 'title' | 'date' | 'summary'>),
    };
  } catch (e) {
    return undefined;
  }
}
