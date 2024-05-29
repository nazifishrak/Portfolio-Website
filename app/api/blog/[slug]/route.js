import { NextResponse } from 'next/server';
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/blogs/blog.models";

export async function GET(request, { params }) {
    try {
        // Connect to the database
        await connectToDatabase();

        const { slug } = params;

        const blog = await Blog.findOne({ slug: slug });
        console.log("Blogs: ", blog);

        // Return the blog post as JSON
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
