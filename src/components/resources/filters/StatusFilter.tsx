import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusFilterProps {
  onStatusChange?: (status: string) => void;
  statuses?: Array<{
    value: string;
    label: string;
  }>;
  selectedStatus?: string;
}

const StatusFilter = ({
  onStatusChange = () => {},
  statuses = [
    { value: "available", label: "Available" },
    { value: "unavailable", label: "Unavailable" },
    { value: "archived", label: "Archived" },
  ],
  selectedStatus = "",
}: StatusFilterProps) => {
  const handleValueChange = (value: string) => {
    onStatusChange(value);
  };

  return (
    <div className="w-[150px] h-[40px] bg-white">
      <Select value={selectedStatus} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-full">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StatusFilter;
