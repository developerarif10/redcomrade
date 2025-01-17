"use server";

import { auth, signIn } from "@/auth";

export async function credentailLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (response?.error) {
      console.error("SignIn error:", result.error);
      return { error: "Invalid credentials" };
    }

    return response;
  } catch (error) {
    console.error("Unexpected error during login:", error);
    return { error: "An unexpected error occurred" };
  }
}

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}

export async function getCurrentUserId() {
  try {
    const session = await auth();
    if (session && session.user) {
      return { userId: session.user.id };
    } else {
      return { error: "User not authenticated" };
    }
  } catch (error) {
    console.error("Error fetching user ID:", error);
    return { error: "An unexpected error occurred" };
  }
}
