import React from "react";
import { Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionCellProps {
  onFavorite?: () => void;
  onDownload?: () => void;
  isFavorited?: boolean;
  isDownloadable?: boolean;
}

const ActionCell = ({
  onFavorite = () => {},
  onDownload = () => {},
  isFavorited = false,
  isDownloadable = true,
}: ActionCellProps) => {
  return (
    <div className="w-[100px] h-[50px] bg-white px-2 flex items-center justify-end gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onFavorite}
            >
              <Heart
                className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : "text-gray-400"}`}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isFavorited ? "Remove from favorites" : "Add to favorites"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onDownload}
              disabled={!isDownloadable}
            >
              <Download
                className={`h-4 w-4 ${isDownloadable ? "text-gray-400" : "text-gray-200"}`}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Download resource</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ActionCell;
