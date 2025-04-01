import { TableData } from "../types";

interface TableProps {
  data: TableData[];
}

export function Table({ data }: TableProps): JSX.Element {
  // Column headers
  const headers: string[] = [
    "Model Type",
    "Category",
    "Error",
    "RMSE",
    "Accuracy",
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white ">
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3  font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700 ">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
            >
              <td className="px-6 py-4 font-medium text-gray-200">
                {row.modelType}
              </td>
              <td className="px-6 py-4 text-gray-300">{row.category}</td>
              <td className="px-6 py-4 text-gray-300">{row.error}</td>
              <td className="px-6 py-4 text-gray-300">{row.rmse}</td>
              <td className="px-6 py-4 text-gray-300">{row.hit}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
