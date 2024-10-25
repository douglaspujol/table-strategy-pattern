import React from 'react';
import { Column, TableProps } from './types';

const Table =<T,>({ data, strategy }: TableProps<T>) => {
  
  const defaultStrategy = { columns: [] as Column<T>[] };
  const currentStrategy = strategy ? (strategy as { columns: Column<T>[] }) : defaultStrategy;
 
  return (
    <table>
      <thead>
        <tr>
          {currentStrategy?.columns?.map((col) => (
            <th key={col.key} className="px-4 py-2 border border-dashed border-border">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentStrategy && data && data.length > 0  ? data?.map((row, index) => (
          <tr key={index}
            className="hover:bg-hoverTable"
          >
            {currentStrategy?.columns?.map((col) => col.render(row))}
          </tr>
        )) : (
          <tr>
            <td colSpan={currentStrategy?.columns?.length || 1} className="px-4 py-2 text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default  React.memo(Table);