// pages/api/blogs/[slug].ts

import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/blogs/blog.models';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid blog ID' });
  }

  try {
    await connectToDatabase();

    const blog = await Blog.findOne({ _id: id });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
