import { TableProps } from "./types";

export default function Table<RowType>({ strategies, data }: TableProps<RowType>) {
  return (
    <table>
      <thead>
        <tr>
          {strategies.columns.map((col) => (
            <th key={col.key} className="px-4 py-2 border border-dashed border-border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-hoverTable">
            {strategies.columns.map((col) => (
              col.render(row)
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
