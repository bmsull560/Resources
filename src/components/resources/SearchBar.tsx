import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
  initialValue?: string;
}

const SearchBar = ({
  onSearch = () => {},
  placeholder = "Search resources...",
  initialValue = "",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState(initialValue);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-[400px] h-[40px] bg-white rounded-md">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        className="pl-10 h-full w-full"
      />
    </div>
  );
};

export default SearchBar;
