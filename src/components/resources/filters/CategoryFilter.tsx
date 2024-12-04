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

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
  categories?: string[];
  selectedCategory?: string;
}

const CategoryFilter = ({
  onCategoryChange = () => {},
  categories = ["Documents", "Images", "Videos", "Audio", "Other"],
  selectedCategory = "",
}: CategoryFilterProps) => {
  const handleValueChange = (value: string) => {
    onCategoryChange(value);
  };

  return (
    <div className="w-[200px] h-[40px] bg-white">
      <Select value={selectedCategory} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-full">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
