'use client';
import { useParams } from 'next/navigation';
import useAuthentication from '@/app/hooks/useAuthentication';
import useBlogData from "@/app/hooks/useBlogData";
import Loading from "@/app/blog/loading";
import PasswordForm from "@/app/components/Admin Panels/PasswordForm";
import UpdateBlogForm from "@/app/components/Admin Panels/UpdateBlogForm";


const UpdateBlog = () => {
    const { slug } = useParams();
    let pass = process.env.PASSWORD

    // @ts-ignore
    const { password, setPassword, isAuthenticated, handlePasswordSubmit } = useAuthentication(process.env.NEXT_PUBLIC_PASSWORD);
    const { blogTitle, setBlogTitle, blogContent, setBlogContent, pictureUrl, setPictureUrl, blogSlug, setBlogSlug, blogCategory, setBlogCategory, loading, handleSubmit } = useBlogData(slug);

    if (loading) {
        return <Loading />
    }

    return (

            !isAuthenticated ?

                (<div className="flex items-center justify-center min-h-screen">
                    <PasswordForm
                        password={password}
                        setPassword={setPassword}
                        handlePasswordSubmit={handlePasswordSubmit}/>
                    </div>
                ) : (
                    <UpdateBlogForm
                        blogTitle={blogTitle}
                        setBlogTitle={setBlogTitle}
                        blogContent={blogContent}
                        setBlogContent={setBlogContent}
                        pictureUrl={pictureUrl}
                        setPictureUrl={setPictureUrl}
                        blogSlug={blogSlug}
                        setBlogSlug={setBlogSlug}
                        blogCategory={blogCategory}
                        setBlogCategory={setBlogCategory}
                        handleSubmit={handleSubmit}
                    />
                )

    );
};

export default UpdateBlog;
