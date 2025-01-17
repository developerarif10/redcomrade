import { formatMyDate } from "@/lib/date";
import Image from "next/image";

export default function CommentCard({ comment }) {
  // console.log(comment);
  // console.log("Entire comment object:", comment);
  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Image
          width={100}
          height={100}
          src="https://github.com/shadcn.png"
          alt="Commenter"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">{comment?.name || "Anonymous"}</h4>
          <p className="text-gray-500 text-sm">
            {comment?.createdAt
              ? formatMyDate(comment.createdAt)
              : "Date unknown"}
          </p>
        </div>
      </div>
      <p className="ml-14">{comment?.comment}</p>
    </div>
  );
}
