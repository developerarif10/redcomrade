import { BlogComment } from "@/model/blogComment-model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, comment, userId, blogId } = await request.json();

  const newComment = {
    name,
    email,
    comment,
    createdAt: new Date(),
    user: userId,
    blogId: blogId,
  };

  try {
    const createdComment = await BlogComment.create(newComment);

    return new NextResponse(JSON.stringify(createdComment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
