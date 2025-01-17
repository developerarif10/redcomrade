import SearchDonor from "@/components/Search/search-donor";
import { columns } from "./_components/columns";
import { DonorList } from "./_components/donor-list";

export default async function Donor({
  searchParams: { bloodGroup, district, subDistrict, page },
}) {
  return (
    <>
      <div className="pt-32 pb-20 bg-red-500 z-10 inset-0 flex flex-col gap-5 items-center justify-center px-4 ">
        <SearchDonor
          district={district}
          bloodGroup={bloodGroup}
          subDistrict={subDistrict}
        />
      </div>

      <DonorList
        district={district}
        bloodGroup={bloodGroup}
        subDistrict={subDistrict}
        columns={columns}
        page={page}
      />
    </>
  );
}
