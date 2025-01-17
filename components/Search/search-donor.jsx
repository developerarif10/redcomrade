"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ComboboxDropdown } from "../combobox";
import { SelectDropDown } from "../select-dropdown";
import { SubDistrictCombobox } from "../subdistrict-combobox";
import { Button } from "../ui/button";

export default function SearchDonor({ district, bloodGroup, subDistrict }) {
  const { replace } = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const bloodGroupParam = searchParams.get("bloodGroup") || "";
  const districtParam = searchParams.get("district") || "";

  const [searchTerm, setSearchTerm] = useState({
    bloodGroup: bloodGroup || decodeURIComponent(bloodGroupParam),
    district: district || decodeURIComponent(districtParam),
    subDistrict: searchParams.get("subDistrict") || "",
  });

  const [isDistrictEnabled, setIsDistrictEnabled] = useState(false);
  const [isSubDistrictEnabled, setIsSubDistrictEnabled] = useState(false);
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  useEffect(() => {
    setIsDistrictEnabled(!!searchTerm.bloodGroup);
    setIsSubDistrictEnabled(!!searchTerm.district);
    setIsSearchEnabled(
      !!searchTerm.bloodGroup &&
        !!searchTerm.district &&
        !!searchTerm.subDistrict
    );
  }, [searchTerm]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
  };

  function doSearch(event) {
    const params = new URLSearchParams();
    // params.set("bloodGroup", searchTerm?.bloodGroup || "all");

    if (searchTerm?.bloodGroup) {
      params.set("bloodGroup", searchTerm.bloodGroup);
    }

    if (searchTerm?.district) {
      params.set("district", searchTerm?.district);
    }

    if (searchTerm?.subDistrict) {
      params.set("subDistrict", searchTerm?.subDistrict);
    }

    const searchUrl = `${pathname}?${params.toString()}`;

    if (pathname.includes("donor")) {
      replace(searchUrl);
    } else {
      replace(`${pathname}donor${searchUrl}`);
    }
  }

  return (
    <div className="border flex justify-center flex-col items-center border-slate-100 bg-white px-14 py-7 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur ">
      <div id="searchParams" className="lg:flex gap-5">
        <div className="">
          <SelectDropDown
            value={searchTerm.bloodGroup}
            onChange={(selectedValue) =>
              handleInputs({
                target: { name: "bloodGroup", value: selectedValue },
              })
            }
          />
        </div>
        <div className="">
          <ComboboxDropdown
            value={searchTerm.district}
            onChange={handleInputs}
            disabled={!isDistrictEnabled}
          />
        </div>
        <div className="">
          <SubDistrictCombobox
            value={searchTerm.subDistrict}
            onChange={(selectedValue) =>
              handleInputs({
                target: { name: "subDistrict", value: selectedValue },
              })
            }
            district={searchTerm.district}
            disabled={!isSubDistrictEnabled}
          />
        </div>
      </div>
      <div className="  relative top-16">
        <Button
          className="search-btn"
          onClick={doSearch}
          type="submit"
          disabled={!isSearchEnabled}
        >
          সার্চ করুন
        </Button>
      </div>
    </div>
  );
}
