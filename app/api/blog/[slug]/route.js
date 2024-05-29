import { NextResponse } from 'next/server';
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/blogs/blog.models";

export async function GET(request, { params }) {
    try {
        // Connect to the database
        await connectToDatabase();

        // Extract the slug from the params object
        const { slug } = params;

        // Find the blog post with the given slug
        const blog = await Blog.findOne({ slug: slug });
        console.log("Blogs: ", blog);

        // Return the blog post as JSON
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
