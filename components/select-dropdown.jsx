"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDropDown({ fromSignup, value, onChange }) {
  return (
    <Select
      // name="bloodGroup"
      // onValueChange={(selectedValue) =>
      // onChange({ target: { name: "bloodGroup", value: selectedValue } })
      // }
      value={value}
      onValueChange={onChange}
    >
      {!fromSignup && <span className="text-sm text-black ">রক্তের গ্রুপ</span>}
      <SelectTrigger
        className={
          !fromSignup
            ? "w-[250px] font-medium bg-transparent border border-slate-950 outline-none"
            : "text-gray-500 "
        }
      >
        <SelectValue placeholder="রক্তের গ্রুপ সিলেক্ট করুন" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A+">A+</SelectItem>
        <SelectItem value="A-">A-</SelectItem>
        <SelectItem value="B+">B+</SelectItem>
        <SelectItem value="B-">B-</SelectItem>
        <SelectItem value="O+">O+</SelectItem>
        <SelectItem value="O-">O-</SelectItem>
        <SelectItem value="AB+">AB+</SelectItem>
        <SelectItem value="AB-">AB-</SelectItem>
      </SelectContent>
    </Select>
  );
}
