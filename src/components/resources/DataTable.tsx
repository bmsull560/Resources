import React from "react";
import { Table } from "@/components/ui/table";
import ResourceNameCell from "./table/ResourceNameCell";
import ActionCell from "./table/ActionCell";
import { Badge } from "@/components/ui/badge";

interface Resource {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  dateAdded: string;
  status: "available" | "unavailable" | "archived";
  isFavorited: boolean;
  metadata: {
    type: string;
    size: string;
    lastModified: string;
  };
}

interface DataTableProps {
  resources?: Resource[];
  onFavorite?: (id: string) => void;
  onDownload?: (id: string) => void;
  onSort?: (column: string, direction: "asc" | "desc") => void;
}

const DataTable = ({
  resources = [
    {
      id: "1",
      name: "Sample Document",
      url: "https://example.com/document",
      description: "A sample document for demonstration",
      category: "Documents",
      dateAdded: "2024-03-20",
      status: "available",
      isFavorited: false,
      metadata: {
        type: "PDF",
        size: "2.5 MB",
        lastModified: "2024-03-20",
      },
    },
    {
      id: "2",
      name: "Sample Image",
      url: "https://example.com/image",
      description: "A sample image for demonstration",
      category: "Images",
      dateAdded: "2024-03-19",
      status: "unavailable",
      isFavorited: true,
      metadata: {
        type: "PNG",
        size: "1.2 MB",
        lastModified: "2024-03-19",
      },
    },
  ],
  onFavorite = () => {},
  onDownload = () => {},
  onSort = () => {},
}: DataTableProps) => {
  const getStatusColor = (status: Resource["status"]) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "unavailable":
        return "bg-red-100 text-red-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full h-[600px] bg-white border rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th
                className="w-[300px] px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort("name", "asc")}
              >
                Resource Name
              </th>
              <th
                className="w-[150px] px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort("category", "asc")}
              >
                Category
              </th>
              <th
                className="w-[150px] px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort("dateAdded", "asc")}
              >
                Date Added
              </th>
              <th
                className="w-[150px] px-4 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => onSort("status", "asc")}
              >
                Status
              </th>
              <th className="w-[100px] px-4 py-3 text-right text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {resources.map((resource) => (
              <tr
                key={resource.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">
                  <ResourceNameCell
                    name={resource.name}
                    url={resource.url}
                    description={resource.description}
                    metadata={resource.metadata}
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {resource.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {resource.dateAdded}
                </td>
                <td className="px-4 py-2">
                  <Badge
                    className={`${getStatusColor(resource.status)} capitalize`}
                  >
                    {resource.status}
                  </Badge>
                </td>
                <td className="px-4 py-2">
                  <ActionCell
                    onFavorite={() => onFavorite(resource.id)}
                    onDownload={() => onDownload(resource.id)}
                    isFavorited={resource.isFavorited}
                    isDownloadable={resource.status === "available"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
