import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDonorList } from "@/queries/donors";
import Link from "next/link";
import { Suspense } from "react";
import DonorCard from "./donor-card";

export async function DonorList({
  district,
  bloodGroup,
  subDistrict,
  page = 1,
}) {
  // Pagination code here
  const pageSize = 25;
  const currentPage = Number(page) || 1;

  const { donors, totalCount } = await getDonorList({
    district,
    bloodGroup,
    subDistrict,
    page: currentPage,
    pageSize,
  });

  const pageCount = Math.ceil(totalCount / pageSize);

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams({
      district,
      bloodGroup,
      subDistrict,
      page: pageNumber.toString(),
    });
    return `?${params.toString()}`;
  };

  // console.log(allDonors);
  return (
    <div className="container my-10">
      <p className="sm:hidden text-xl font-medium my-4 mx-auto w-[75%] text-center bg-[#80ed99]">
        {`${bloodGroup} গ্রুপের রক্তদাতাদের তালিকা`}
      </p>
      <div className="rounded-md lg:border">
        <Table>
          <TableHeader className="hidden sm:table-header-group">
            <TableRow className="bg-[#52b788] hover:bg-default-50">
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Phone or Email</TableHead>
              <TableHead className="text-black">Blood Group</TableHead>
              <TableHead className="text-black">District</TableHead>
              <TableHead className="text-black">Sub District</TableHead>
              <TableHead className="text-black">Address</TableHead>
              {/* <TableHead>Availability</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <Suspense fallback={<Loading />}>
              {donors.length > 0 ? (
                donors.map((donor, index) => (
                  <DonorCard
                    key={donor?.id}
                    district={district}
                    subDistrict={subDistrict}
                    bloodGroup={bloodGroup}
                    donorInfo={donor}
                    index={index}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan="6"
                    className="h-20 bg-[#ffcbcbcc] text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </Suspense>
          </TableBody>
        </Table>
      </div>
      {/* Next or Previous Button for pagination  */}
      <div className="flex items-center sm:justify-end justify-center space-x-2 py-4 ">
        <Link href={createPageUrl(Math.max(1, currentPage - 1))} passHref>
          <Button variant="outline" size="sm" disabled={currentPage === 1}>
            Previous
          </Button>
        </Link>
        <span>
          Page {currentPage} of {pageCount}
        </span>
        <Link
          href={createPageUrl(Math.min(pageCount, currentPage + 1))}
          passHref
        >
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === pageCount}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
