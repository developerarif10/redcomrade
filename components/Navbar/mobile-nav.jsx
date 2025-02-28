import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedButton } from "../my-components/my-buttons";
import { buttonVariants } from "../ui/button";

export function MobileNav({ items, children }) {
  useLockBody();

  const { data: session } = useSession();

  // if (session?.error === "RefreshAccessTokenError") {
  //   redirect("/login");
  // }

  const [loginSession, setLoginSession] = useState(null);

  useEffect(() => {
    // console.log("test");
    setLoginSession(session);
  }, [session]);

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md border">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {!loginSession && (
          <div className="items-center gap-3 flex lg:hidden">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              লগইন
            </Link>

            <AnimatedButton className="w-full">রেজিস্ট্রেশন</AnimatedButton>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
