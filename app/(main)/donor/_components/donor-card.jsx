import { TableCell, TableRow } from "@/components/ui/table";

export default function donorInfoCard({
  donorInfo,
  district,
  bloodGroup,
  subDistrict,
  index,
}) {
  let params = "";

  if (district && bloodGroup) {
    params = `?bloodGroup=${bloodGroup}&district=${district}`;
  }

  if (subDistrict) {
    params = `?bloodGroup=${bloodGroup}&district=${district}&subDistrict=${subDistrict}`;
  }

  return (
    <>
      {/* Desktop view (hidden on mobile) */}
      <TableRow
        className={`${
          index % 2 == 0 ? "bg-[#caf0f8]" : "bg-[#f6fff8]"
        } hidden sm:table-row hover:bg-default-50`}
      >
        {donorInfo?.fullName ? (
          <TableCell>{donorInfo?.fullName}</TableCell>
        ) : (
          <TableCell>{donorInfo?.name}</TableCell>
        )}

        {donorInfo?.phone ? (
          <TableCell>{donorInfo?.phone}</TableCell>
        ) : (
          <TableCell>{donorInfo?.email}</TableCell>
        )}

        {donorInfo?.bloodGroup ? (
          <TableCell>{donorInfo?.bloodGroup}</TableCell>
        ) : (
          <TableCell>
            <span>Not given</span>
          </TableCell>
        )}

        {donorInfo?.district ? (
          <TableCell>{donorInfo?.district}</TableCell>
        ) : (
          <TableCell>
            <span>Not given</span>
          </TableCell>
        )}

        {donorInfo?.subDistrict ? (
          <TableCell>{donorInfo?.subDistrict}</TableCell>
        ) : (
          <TableCell>
            <span>Not given</span>
          </TableCell>
        )}

        {donorInfo?.location ? (
          <TableCell>{donorInfo?.location}</TableCell>
        ) : (
          <TableCell>
            <span>Not given</span>
          </TableCell>
        )}
      </TableRow>

      {/* Mobile view (hidden on desktop) */}
      <div className="sm:hidden flex justify-center items-center my-4 text-center">
        <div className="min-w-72 flex flex-col bg-white border border-t-4 border-t-red-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-red-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5 text-gray-800 font-semibold">
            <p className="mt-0">
              নামঃ {donorInfo?.fullName || donorInfo?.name}
            </p>
            <p className="mt-2">ইমেইলঃ {donorInfo?.email}</p>
            <p className="mt-2  ">
              রক্তের গ্রুপঃ {donorInfo?.bloodGroup || "Not given"}
            </p>
            <p className="mt-2 ">নাম্বারঃ {donorInfo?.phone || "Not given"}</p>
            <p className="mt-2 ">জেলাঃ {donorInfo?.district || "Not given"}</p>
            <p className="mt-2 ">
              উপজেলাঃ {donorInfo?.subDistrict || "Not given"}
            </p>
            <p className="mt-2 ">
              ঠিকানাঃ {donorInfo?.location || "Not given"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
