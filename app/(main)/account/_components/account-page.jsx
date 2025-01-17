import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getLoggedInUser } from "@/lib/loggedIn-user";
import Image from "next/image";
import PasswordChange from "./password-change";

export default async function AccountPage() {
  const loggedInUser = await getLoggedInUser();

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            ব্যবহারকারীর প্রোফাইল
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="User avatar"
                className="select-none"
              />
              <AvatarFallback>
                <Image
                  src="/avatar_circle.jpeg"
                  alt="AR"
                  width={300}
                  className="select-none"
                  height={300}
                />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">নাম</Label>
            <Input id="name" value={loggedInUser?.fullName} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ইমেইল</Label>
            <Input id="email" value={loggedInUser?.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation">পদবি</Label>
            <Input
              id="designation"
              value={loggedInUser?.designation || "Student"}
            />
          </div>
        </CardContent>
        <CardFooter>
          <PasswordChange />
        </CardFooter>
      </Card>
    </div>
  );
}
