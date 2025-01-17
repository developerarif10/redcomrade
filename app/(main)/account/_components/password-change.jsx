"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function PasswordChange() {
  const [isOpen, setIsOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Implement password change logic here
    console.log("Password change requested");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">পাসওয়ার্ড পরিবর্তন করুন</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>পাসওয়ার্ড পরিবর্তন করুন</DialogTitle>
          <DialogDescription>
            আপনার পাসওয়ার্ড পরিবর্তন করতে নিচের ফর্মটি পূরণ করুন।
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="old-password">পুরানো পাসওয়ার্ড</Label>
            <Input
              id="old-password"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">নতুন পাসওয়ার্ড</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">
              নতুন পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">পরিবর্তন করুন</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
