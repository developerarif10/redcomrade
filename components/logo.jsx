import { cn } from "@/lib/utils";
import logo from "@/public/red_comrade_transparent.png";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[170px]", className)} src={logo} alt="logo" />
  );
};
