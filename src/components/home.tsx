import React from "react";
import TableHeader from "./resources/TableHeader";
import FilterBar from "./resources/FilterBar";
import DataTable from "./resources/DataTable";
import TablePagination from "./resources/TablePagination";
import { DateRange } from "react-day-picker";

interface HomeProps {
  onSearch?: (searchTerm: string) => void;
  onCategoryChange?: (category: string) => void;
  onDateRangeChange?: (dateRange: DateRange | undefined) => void;
  onStatusChange?: (status: string) => void;
  onFavorite?: (id: string) => void;
  onDownload?: (id: string) => void;
  onSort?: (column: string, direction: "asc" | "desc") => void;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

const Home = ({
  onSearch = () => {},
  onCategoryChange = () => {},
  onDateRangeChange = () => {},
  onStatusChange = () => {},
  onFavorite = () => {},
  onDownload = () => {},
  onSort = () => {},
  onPageChange = () => {},
  onPageSizeChange = () => {},
}: HomeProps) => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col">
      <TableHeader onSearch={onSearch} />
      <FilterBar
        onCategoryChange={onCategoryChange}
        onDateRangeChange={onDateRangeChange}
        onStatusChange={onStatusChange}
      />
      <div className="flex-1 p-6 overflow-hidden">
        <DataTable
          onFavorite={onFavorite}
          onDownload={onDownload}
          onSort={onSort}
        />
      </div>
      <TablePagination
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};

export default Home;
