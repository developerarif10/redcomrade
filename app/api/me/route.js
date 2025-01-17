import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import connectMongo from "@/service/mongo";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const session = await auth();
  if (!session?.user) {
    return new NextResponse("You are not authenticated!", { status: 401 });
  }

  await connectMongo();

  try {
    const user = await getUserByEmail(session?.user?.email);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
