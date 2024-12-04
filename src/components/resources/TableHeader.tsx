import React from "react";
import SearchBar from "./SearchBar";

interface TableHeaderProps {
  title?: string;
  description?: string;
  onSearch?: (searchTerm: string) => void;
}

const TableHeader = ({
  title = "Resource Explorer",
  description = "Browse, filter, and manage your favorite resources",
  onSearch = () => {},
}: TableHeaderProps) => {
  return (
    <div className="w-full h-[120px] bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex flex-col gap-4">
        {/* Title and Description */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-between items-center">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
