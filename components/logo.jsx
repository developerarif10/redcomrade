import { cn } from "@/lib/utils";
import logo from "@/public/redcomrade_logo.svg";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[110px]", className)} src={logo} alt="logo" />
  );
};
