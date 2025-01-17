import { replaceMongoIdInArray } from "@/lib/convertData";
import { User } from "@/model/user-model";

// export async function getDonorList({ district, subDistrict, bloodGroup }) {
//   const donors = await User.find({ district, subDistrict, bloodGroup })
//     .select([
//       "fullName",
//       "name",
//       "email",
//       "bloodGroup",
//       "phone",
//       "district",
//       "subDistrict",
//       "location",
//     ])
//     .lean();
//   return replaceMongoIdInArray(donors);
// }

export async function getDonorList({
  district,
  subDistrict,
  bloodGroup,
  page = 1,
  pageSize = 25,
}) {
  const skip = (page - 1) * pageSize;

  const donors = await User.find({ district, subDistrict, bloodGroup })
    .select([
      "fullName",
      "name",
      "email",
      "bloodGroup",
      "phone",
      "district",
      "subDistrict",
      "location",
    ])
    .skip(skip)
    .limit(pageSize)
    .lean();

  const totalCount = await User.countDocuments({
    district,
    subDistrict,
    bloodGroup,
  });

  return {
    donors: replaceMongoIdInArray(donors),
    totalCount,
  };
}
