"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SubDistricts } from "@/database/district-data/sub-districts";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";

export function SubDistrictCombobox({ fromSignup, value, onChange, district }) {
  const getSubDistricts = SubDistricts;
  const [open, setOpen] = useState(false);
  const [subDistricts, setSubDistricts] = useState([]);

  useEffect(() => {
    if (district) {
      setSubDistricts(getSubDistricts(district));
    } else {
      setSubDistricts([]);
    }
  }, [district]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {!fromSignup && <span className="text-sm">উপজেলা</span>}
      <PopoverTrigger
        asChild
        className={
          !fromSignup
            ? "flex justify-between bg-transparent border border-slate-950 outline-transparent hover:bg-transparent"
            : "text-gray-500"
        }
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={!fromSignup ? "w-[250px] " : ""}
          disabled={!district}
        >
          {value
            ? subDistricts.find((subDistrict) => subDistrict.value === value)
                ?.label
            : "উপজেলা সিলেক্ট করুন"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="উপজেলা সার্চ করুন..." />
          <CommandList>
            <CommandEmpty className="text-red-500 text-center text-sm">
              No sub-district found
            </CommandEmpty>
            <CommandGroup>
              {subDistricts.map((subDistrict) => (
                <CommandItem
                  key={subDistrict.value}
                  value={subDistrict.value}
                  onSelect={(currentValue) => {
                    if (!fromSignup) {
                      onChange(currentValue);
                    } else {
                      onChange({
                        target: {
                          name: "subDistrict",
                          value: currentValue,
                        },
                      });
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === subDistrict.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {subDistrict.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
