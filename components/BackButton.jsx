import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="absolute top-4 left-4 flex items-center text-white bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-lg"
    >
      <ChevronLeft className="w-5 h-5 mr-2" />
      Back
    </Link>
  );
}
