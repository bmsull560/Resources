import React from "react";
import CategoryFilter from "./filters/CategoryFilter";
import DateRangeFilter from "./filters/DateRangeFilter";
import StatusFilter from "./filters/StatusFilter";
import { DateRange } from "react-day-picker";

interface FilterBarProps {
  onCategoryChange?: (category: string) => void;
  onDateRangeChange?: (dateRange: DateRange | undefined) => void;
  onStatusChange?: (status: string) => void;
  selectedCategory?: string;
  selectedDateRange?: DateRange;
  selectedStatus?: string;
}

const FilterBar = ({
  onCategoryChange = () => {},
  onDateRangeChange = () => {},
  onStatusChange = () => {},
  selectedCategory = "",
  selectedDateRange = {
    from: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    to: new Date(),
  },
  selectedStatus = "",
}: FilterBarProps) => {
  return (
    <div className="w-full h-[60px] bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center gap-4 h-full">
        <CategoryFilter
          onCategoryChange={onCategoryChange}
          selectedCategory={selectedCategory}
        />
        <DateRangeFilter
          onDateRangeChange={onDateRangeChange}
          initialDateRange={selectedDateRange}
        />
        <StatusFilter
          onStatusChange={onStatusChange}
          selectedStatus={selectedStatus}
        />
      </div>
    </div>
  );
};

export default FilterBar;
