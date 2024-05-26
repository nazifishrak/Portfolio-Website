//setting up mongoose and mongodb models for website blog
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,
        trim: true,

    },
    blogContent: {
        type: String,
        required: false,
    },
    pictureUrl: {
        type: String,
        required: false,

    }
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

