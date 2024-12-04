import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PreviewModalProps {
  isVisible?: boolean;
  resource?: {
    name?: string;
    url?: string;
    description?: string;
    type?: string;
    size?: string;
    lastModified?: string;
    tags?: string[];
  };
  position?: {
    x: number;
    y: number;
  };
}

const PreviewModal = ({
  isVisible = true,
  resource = {
    name: "Sample Resource",
    url: "https://example.com/resource",
    description:
      "A detailed description of the sample resource and its contents.",
    type: "Document",
    size: "1.2 MB",
    lastModified: "2024-03-20",
    tags: ["documentation", "sample", "guide"],
  },
  position = { x: 0, y: 0 },
}: PreviewModalProps) => {
  if (!isVisible) return null;

  return (
    <Card
      className="absolute w-[400px] bg-white shadow-lg rounded-lg overflow-hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(20px, -50%)",
        zIndex: 50,
      }}
    >
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            {resource.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {resource.description}
          </p>
        </div>

        {/* URL Preview */}
        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-4 text-gray-400">🔗</div>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline truncate"
          >
            {resource.url}
          </a>
        </div>

        {/* Metadata */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 w-4 text-gray-400">📄</div>
            <span className="text-gray-600">
              {resource.type} • {resource.size}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-4 w-4 text-gray-400">📅</div>
            <span className="text-gray-600">
              Modified {resource.lastModified}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 text-gray-400">🏷️</div>
          <div className="flex flex-wrap gap-1">
            {resource.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-sm"
            onClick={() => window.open(resource.url, "_blank")}
          >
            Open URL
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PreviewModal;
