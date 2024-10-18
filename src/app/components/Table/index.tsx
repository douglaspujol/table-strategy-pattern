import { TableProps } from "./types";


export default function Table<T extends Record<string, unknown>>({ columns, data }: TableProps<T>) {

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-4 py-2 border border-dashed border-border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, item) => (
          <tr key={item} className="hover:bg-hoverTable">
            {columns.map((col) => (
              col.render(row)
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
