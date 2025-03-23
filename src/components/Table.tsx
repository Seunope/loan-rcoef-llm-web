// components/Table.tsx
import { TableData } from "../types";

interface TableProps {
  data: TableData[];
}

export function Table({ data }: TableProps): JSX.Element {
  // Column headers
  const headers: string[] = ["Model Type", "Hit", "Error", "RMSE", "Dataset"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 font-medium">{row.modelType}</td>
              <td className="px-6 py-4">{row.hit}</td>
              <td className="px-6 py-4">{row.error}</td>
              <td className="px-6 py-4">{row.rmse}</td>
              <td className="px-6 py-4">{row.dataset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
