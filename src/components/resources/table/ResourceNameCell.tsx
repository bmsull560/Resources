import React from "react";
import { Link2 } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ResourceNameCellProps {
  name?: string;
  url?: string;
  description?: string;
  metadata?: {
    type?: string;
    size?: string;
    lastModified?: string;
  };
}

const ResourceNameCell = ({
  name = "Sample Resource",
  url = "https://example.com/resource",
  description = "A sample resource description",
  metadata = {
    type: "Document",
    size: "1.2 MB",
    lastModified: "2024-03-20",
  },
}: ResourceNameCellProps) => {
  return (
    <div className="w-[300px] h-[50px] bg-white px-4 py-2 flex items-center gap-2">
      <Link2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-left hover:text-blue-600 transition-colors">
            <span className="font-medium truncate block">{name}</span>
            <span className="text-xs text-gray-500 truncate block">{url}</span>
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{description}</p>
            <div className="pt-2 border-t border-gray-100">
              <dl className="text-xs space-y-1">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Type:</dt>
                  <dd className="font-medium">{metadata.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Size:</dt>
                  <dd className="font-medium">{metadata.size}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Last Modified:</dt>
                  <dd className="font-medium">{metadata.lastModified}</dd>
                </div>
              </dl>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ResourceNameCell;
