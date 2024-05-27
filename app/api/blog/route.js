//this is the route file for the blog api using nextjs routes
import {NextResponse} from "next/server";
import Blog from "../../models/blogs/blog.models.js";
import connectToDatabase from "../../lib/mongodb";


// GET

export async function GET(req,res){
    const db = await connectToDatabase();
    const blog1 = new Blog({
        blogTitle: "First Blog",
        blogContent: "This is the first blog",
        pictureUrl: "https://www.google.com"
    });
    await blog1.save();



    const blogs = await Blog.find({});
    console.log("Blogs: ", blogs, db.connection.name);
    return NextResponse.json(blogs);
}