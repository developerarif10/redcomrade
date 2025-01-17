import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
export const BlogGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BlogGridItem = ({
  className,
  title,
  description,
  thumbnail,
  icon,
  image,
  blogId,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-2-white/[0.1]  justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Image
        src={thumbnail}
        className="w-full h-full object-cover rounded-xl"
        alt={title}
        width={100}
        height={100}
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          <Link href={`/blogs/${blogId}`} className="hover:text-blue-400">
            {title}
          </Link>
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
