// "use server";

// import { Blog } from "@/model/blog-model";
// import connectMongo from "@/service/mongo";

// export async function updateBlogComment(blogId, commentId, comment) {
//   try {
//     await connectMongo();
//     const updatedBlog = await Blog.findByIdAndUpdate(
//       blogId,
//       {
//         $push: {
//           commentIds: commentId,
//         },
//       },
//       { new: true }
//     );
//     return { success: true, commentId: newComment._id, updatedBlog };
//   } catch (error) {
//     console.error(error);
//   }
// }

"use server";

import { Blog } from "@/model/blog-model";
import { BlogComment } from "@/model/blogComment-model";
import connectMongo from "@/service/mongo";

export async function createAndUpdateBlogComment(blogId, commentData) {
  try {
    await connectMongo();

    // Create the new comment
    const newComment = await BlogComment.create(commentData);

    // Update the blog with the new commentId
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: {
          commentIds: newComment._id,
        },
      },
      { new: true }
    );

    return { success: true, commentId: newComment._id, updatedBlog };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
}

// Keep the existing updateBlogComment function
export async function updateBlogComment(blogId, commentId, comment) {
  // ... (keep the existing implementation)
}
