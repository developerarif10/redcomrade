import { getLoggedInUser } from "@/lib/loggedIn-user";
import { getBlogCommentList, getBlogDetails } from "@/queries/blogs";
import Image from "next/image";
import CommentCard from "./_components/comment-card";
import CommentForm from "./_components/comment-form";

export default async function BlogDetailsPage({ params: { blogId } }) {
  const blogInfo = await getBlogDetails(blogId);
  // if (!blogInfo) {
  //   return <div>Blog not found</div>;
  // }
  const loggedInUser = await getLoggedInUser();

  const commentList = await getBlogCommentList(blogId, loggedInUser?._id);

  return (
    <section className="container my-20">
      <div className="max-w-4xl mx-auto p-4">
        {/* Blog Post */}

        <div className="mb-8">
          <Image
            src={blogInfo?.image}
            alt={blogInfo?.title}
            className="w-full mb-4 rounded-xl border border-gray-200"
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold mb-2">{blogInfo?.title}</h1>
          <div className="flex items-center justify-start flex-wrap text-gray-500 mb-4">
            <span className="mr-2">
              By <span className="font-bold">{blogInfo?.author}</span>
            </span>
            <span className="mr-2">|</span>
            <span className="mr-2">{blogInfo?.date}</span>
            <span className="mr-2">|</span>
            <span className="mr-2">
              {blogInfo?.commentIds?.length || 0} comments
            </span>
          </div>
          <hr className="w-full border-gray-200 my-2 lg:hidden" />

          <p className="mb-4">{blogInfo.description}</p>

          {/* <p className="mb-4">
            There’s a time and place for everything... including asking for
            reviews. For instance: you should not asking for a review on your
            checkout page. The sole purpose of this page is to guide your
            customer to complete their purchase, and this means that the page
            should be as minimalist and pared-down possible. You don’t want to
            have any unnecessary elements or Call To Actions.
          </p>
          <p className="mb-4">
            There’s a time and place for everything... including asking for
            reviews. For instance: you should not asking for a review on your
            checkout page. The sole purpose of this page is to guide your
            customer to complete their purchase, and this means that the page
            should be as minimalist and pared-down possible. You don’t want to
            have any unnecessary elements or Call To Actions.
          </p> */}
        </div>

        {/* Author Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Written By</h2>
          <div className="flex items-center">
            <Image
              width={100}
              height={100}
              src="https://github.com/shadcn.png"
              alt="Author"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">
                {loggedInUser?.fullName}
              </h3>
              <p className="text-gray-500">
                Maecenas sit amet purus eget ipsum elementum venenatis. Aenean
                maximus urna magna, quis rutrum mi semper non.
              </p>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {commentList.length || 0} Comments
          </h2>
          {/* {blogInfo?.commentIds &&
            blogInfo.commentIds.map((comment) => {
              return <CommentCard key={comment._id} comment={comment} />;
            })} */}

          {commentList.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))}
        </div>

        {/* Comment Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Leave a comment</h2>
          <CommentForm />
        </div>
      </div>
    </section>
  );
}
