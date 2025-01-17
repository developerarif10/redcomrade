"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { AnimatedButton } from "../my-components/my-buttons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import Image from "next/image";
import { redirect } from "next/navigation";
import { Logo } from "../logo";
import { MobileNav } from "./mobile-nav";

export function MainNav({ items, children }) {
  const { data: session } = useSession();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loginSession, setLoginSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  if (session?.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  useEffect(() => {
    setLoginSession(session);

    async function fetchMe() {
      try {
        const response = await fetch("/api/me");

        if (response.status === 401) {
          console.error("User not authenticated");
          return;
        }

        const data = await response.json();
        setLoggedInUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    if (session) {
      fetchMe();
    }
  }, [session]);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6 lg:gap-10 ">
          <Link href="/">
            <Logo />
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 lg:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
      <nav className="flex items-center gap-3 mix-blend-multiply">
        {!loginSession && (
          <div className="items-center gap-3 hidden lg:flex">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              লগইন
            </Link>

            <AnimatedButton>রেজিস্ট্রেশন</AnimatedButton>
          </div>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {loginSession && (
              <div className="cursor-pointer">
                <Avatar>
                  <AvatarImage src={session?.user?.image} alt="User" />
                  <AvatarFallback>
                    <Image
                      src="/avatar_circle.jpeg"
                      alt="AR"
                      width={100}
                      height={100}
                    />
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-4">
            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href="/account">প্রোফাইল</Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer" asChild>
              <Link href="">শর্তাবলি ও নিয়মাবলি</Link>
            </DropdownMenuItem>

            {loginSession && (
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link
                  href="#"
                  onClick={() => {
                    signOut();
                  }}
                >
                  লগ আউট
                </Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
}
