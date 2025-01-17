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
import { districts } from "@/database/district-data/districts";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export function ComboboxDropdown({ fromSignup, value, onChange }) {
  const [open, setOpen] = useState(false);
  const district = districts;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      {!fromSignup && <span className="text-sm ">জেলা</span>}
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
        >
          {value
            ? districts.find((district) => district.value === value)?.label
            : "জেলা সিলেক্ট করুন"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="জেলা সার্চ করুন..." />
          <CommandList>
            <CommandEmpty className="text-red-500 text-center text-sm">
              No district found
            </CommandEmpty>
            <CommandGroup>
              {districts.map((district) => (
                <CommandItem
                  key={district.value}
                  value={district.value}
                  onSelect={(currentValue) => {
                    fromSignup
                      ? onChange(currentValue)
                      : onChange({
                          target: { name: "district", value: currentValue },
                        });

                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === district.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {district.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
