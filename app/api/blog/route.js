import { NextResponse } from 'next/server';
import Blog from '../../models/blogs/blog.models';
import connectToDatabase from '../../lib/mongodb';
import addFieldToAllDocuments from "../../lib/schemaUpdator";

export async function GET() {
    try {
        await connectToDatabase();
        const blogs = await Blog.find({}).sort({createdAt: -1});
        // console.log("Blogs: ", blogs);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const formData = await req.formData();
        const blogTitle = formData.get('blogTitle');
        const blogContent = formData.get('blogContent');
        const pictureUrl = formData.get('pictureUrl');
        const slug = formData.get('slug');
        const blogCategory = formData.get('blogCategory');

        const blog = new Blog({ blogTitle, blogContent, pictureUrl, slug, blogCategory });
        // console.log('Slug:', slug);
        const newBlog = await blog.save();

        return NextResponse.json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
