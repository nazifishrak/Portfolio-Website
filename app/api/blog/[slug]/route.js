import { NextResponse } from 'next/server';
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/blogs/blog.models";

export async function GET(request, { params }) {
    try {
        // Connect to the database
        await connectToDatabase();

        const { slug } = params;

        const blog = await Blog.findOne({ slug: slug });
        // console.log("Blogs: ", blog);

        // Return the blog post as JSON
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        // Connect to the database
        await connectToDatabase();

        const { slug } = params;
        const updatedData = await request.json();

        const updatedBlog = await Blog.findOneAndUpdate(
            { slug: slug },
            updatedData,
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.json({ error: 'Blog Not Found' }, { status: 404 });
        }

        return NextResponse.json(updatedBlog);
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}




export async function DELETE(request, { params }) {
    try {
        // Connect to the database
        await connectToDatabase();

        const { slug } = params;

        const updatedBlog = await Blog.findOneAndDelete({ slug });
        if (!updatedBlog) {
            return NextResponse.json({ error: 'Blog Not Found' }, { status: 404 });
        }

        return NextResponse.json(updatedBlog);
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}