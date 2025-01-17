import { MailCheck } from "lucide-react";
import Link from "next/link";

export function AnimatedButton({ children }) {
  return (
    <Link href="/register">
      <button className="relative inline-flex h-10 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-red-500 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
          {children}
          <MailCheck className="w-4 h-4" />
        </span>
      </button>
    </Link>
  );
}
