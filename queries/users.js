import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/model/user-model";
import connectMongo from "@/service/mongo";

export async function getUserByEmail(email) {
  const user = await User.findOne({ email: email }).select("-password").lean();
  return replaceMongoIdInObject(user);
}

export async function getUserDetails(userId) {
  const user = await User.findById(userId).select("-password").lean();
  return replaceMongoIdInObject(user);
}

export async function getTotalUserCount() {
  await connectMongo();
  const count = await User.countDocuments();
  return count;
}
