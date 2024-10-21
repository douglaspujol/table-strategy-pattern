// Table.tsx
import React from 'react';
import { TableProps } from './types';


export const Table = <T extends object>({ data, strategy }: TableProps<T>) => {
  return (
    <table>
      <thead>
        <tr>
          {strategy?.columns.map((col) => (
            <th key={col.key} className="px-4 py-2 border border-dashed border-border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}
            className="hover:bg-hoverTable"
          >
            {strategy?.columns.map((col) => col.render(row))}
          </tr>
        )) || (
          <tr>
            <td colSpan={strategy?.columns.length || 1} className="px-4 py-2 text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;