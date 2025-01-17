"use client";
import { getCurrentUserId } from "@/app/actions";
import { createAndUpdateBlogComment } from "@/app/actions/blog";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CommentForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { blogId } = useParams();

  useEffect(() => {
    async function checkUser() {
      try {
        const { userId, error: userIdError } = await getCurrentUserId();

        if (userId) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }

        if (userIdError) {
          console.error("Error getting user ID:", userIdError);
        }
      } catch (error) {
        console.error("Failed to check user:", error);
      } finally {
        setLoading(false);
      }
    }

    checkUser();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const comment = formData.get("comment");

      // Get the user ID using the server action
      const { userId, error: userIdError } = await getCurrentUserId();

      if (!userId) {
        toast.error("Please login first!");
        router.push("/login");
        return;
      }

      if (userIdError) {
        console.error("Error getting user ID:", userIdError);
      }

      const commentData = {
        name,
        email,
        comment,
        userId,
      };

      const result = await createAndUpdateBlogComment(blogId, commentData);

      if (result.success) {
        e.target.reset();
        router.refresh();
        toast.success("Successfully comment created!");
      } else {
        console.error("Error creating comment:", result.error);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          className="w-1/2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email *"
          className="w-1/2 p-2 border border-gray-300 rounded"
        />
      </div>
      <textarea
        placeholder="Your Comment *"
        required
        className="w-full p-2 border border-gray-300 rounded resize-none"
        name="comment"
      ></textarea>
      <button
        type="submit"
        disabled={!isLoggedIn}
        className={`px-4 py-2 text-white rounded ${
          isLoggedIn ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
}
