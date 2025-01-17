"use client";
import { credentailLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await credentailLogin(formData);
      if (response.error) {
        setError(response.error);
        console.error("Login error:", response.error);
      } else {
        router.push("/donor");
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Unexpected error:", error);
    }
  }

  return (
    <Card className="mx-auto max-w-sm w-full bg-white bg-opacity-20 text-white rounded-lg shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-2xl">লগইন করুন</CardTitle>
        <CardDescription className="text-black">
          আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন করুন
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">
                আপনার ইমেইল এড্রেস <span>*</span>
              </Label>
              <span className="text-[12px] -mt-2 text-gray-100 ">
                যে ইমেইল এড্রেস দিয়ে আপনি রেজিস্ট্রেশন করেছিলেন।
              </span>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="hello@gmail.com"
                required
                className="text-black"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">
                পাসওয়ার্ড দিন <span>*</span>
              </Label>
              <span className="text-[12px] -mt-2 text-gray-100 ">
                পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।
              </span>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="********"
                  className="text-black"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              লগইন করুন
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          আমার অ্যাকাউন্ট তৈরি করা নেই?{" "}
          <Link href="/register" className="underline text-black">
            নিবন্ধন করুন
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
