import { User } from "@/model/user-model";
import connectMongo from "@/service/mongo";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
export const POST = async (request) => {
  const {
    fullName,
    email,
    password,
    bloodGroup,
    designation,
    phone,
    district,
    subDistrict,
    location,
  } = await request.json();

  // console.log(
  //   fullName,
  //   email,
  //   password,
  //   bloodGroup,
  //   designation,
  //   phone,
  //   district,
  //   subDistrict,
  //   location
  // );

  await connectMongo();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    fullName,
    email,
    password: hashedPassword,
    bloodGroup,
    designation,
    phone,
    district,
    subDistrict,
    location,
  };

  // console.log(`New user = ${{ newUser }}`);

  try {
    await User.create(newUser);
    return new NextResponse("User Has been Created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
