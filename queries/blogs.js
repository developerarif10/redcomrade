import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { Blog } from "@/model/blog-model";
import { BlogComment } from "@/model/blogComment-model";
import connectMongo from "@/service/mongo";
export const getBlogList = async () => {
  await connectMongo();
  const blog = await Blog.find({}).lean();
  return replaceMongoIdInArray(blog);
};

export const getBlogDetails = async (id) => {
  const blog = await Blog.findById(id).lean();
  return replaceMongoIdInObject(blog);
};

// export const getBlogCommentList = async (blogId) => {
//   try {
//     const comment = await Blog.findById(blogId)
//       .populate({
//         path: "commentIds",
//         model: "BlogComment",
//       })
//       .lean();
//     return replaceMongoIdInArray(comment);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getBlogCommentList = async (blogId, user) => {
  try {
    await connectMongo();
    const blog = await Blog.findById(blogId, user)
      .populate({
        path: "commentIds",
        model: BlogComment,
      })
      .lean();

    if (!blog || !blog.commentIds) {
      return [];
    }

    return replaceMongoIdInArray(blog.commentIds);
  } catch (error) {
    console.error("Error fetching blog comments:", error);
    return [];
  }
};
