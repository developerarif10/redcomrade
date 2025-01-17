"use client";

import { ComboboxDropdown } from "@/components/combobox";
import { SelectDropDown } from "@/components/select-dropdown";
import { SubDistrictCombobox } from "@/components/subdistrict-combobox";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignupForm({ fromSignup }) {
  const router = useRouter();

  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");

  useEffect(() => {
    setSubDistrict("");
  }, [district]);

  const handleDistrictChange = (selectedValue) => {
    setDistrict(selectedValue);
  };

  const handleSubDistrictChange = (event) => {
    setSubDistrict(event.target.value);
  };
  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
      const phone = formData.get("phone");
      const location = formData.get("location");

      console.log({
        fullName,
        email,
        password,
        bloodGroup,
        designation,
        phone,
        district,
        subDistrict,
        location,
      });

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          bloodGroup,
          designation,
          phone,
          district,
          subDistrict,
          location,
        }),
      });

      response.status === 201 && router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Card className="mx-auto max-w-lg bg-white bg-opacity-20 text-white rounded-lg shadow-lg border-none">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          রেড কমরেড রেজিস্ট্রেশন
        </CardTitle>
        <CardDescription className=" text-center text-black">
          সঠিক তথ্য দিয়ে রক্তদাতা হিসেবে অ্যাকাউন্ট তৈরি করুন
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 grid-cols-2 ">
            <div className="grid gap-2">
              <Label htmlFor="fullName">পুরো নাম</Label>
              <Input
                id="fullName"
                name="fullName"
                className="text-black"
                placeholder="আপনার পুরো নাম লিখুন"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">ইমেইল এড্রেস</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="text-black"
                placeholder="hello@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bloodGroup">রক্তের গ্রুপ</Label>

              <SelectDropDown
                value={bloodGroup}
                fromSignup={true}
                onChange={(selectedValue) => setBloodGroup(selectedValue)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="designation">পদবী</Label>
              <Input
                id="designation"
                name="designation"
                className="text-black"
                placeholder="আপনার পদবী লিখুন"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="district">জেলা</Label>
              <ComboboxDropdown
                fromSignup={true}
                value={district}
                // onChange={(selectedValue) => setDistrict(selectedValue)}
                onChange={handleDistrictChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subDistrict">উপজেলা</Label>
              <SubDistrictCombobox
                fromSignup={true}
                value={subDistrict}
                onChange={handleSubDistrictChange}
                district={district}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">মোবাইল নাম্বার (ইংরেজি)</Label>
              <div className="flex">
                <span className="inline-flex  items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  +88
                </span>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="01XXXXXXXXX"
                  className="rounded-l-none h-full text-black"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">আপনার ঠিকানা</Label>
              <textarea
                id="location"
                name="location"
                placeholder="আপনার পুরো ঠিকানা লিখুন"
                className="w-full font-hind-siliguri h-10 p-2 text-sm  text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none "
              ></textarea>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">পাসওয়ার্ড</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="ইংরেজিতে পাসওয়ার্ড লিখুন"
                className="text-black"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">কনফার্ম পাসওয়ার্ড</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                className="text-black"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Button type="submit">অ্যাকাউন্ট তৈরি করুন</Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          আমার অ্যাকাউন্ট করা আছে?{" "}
          <Link href="/login" className="underline text-black">
            লগইন করুন
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
