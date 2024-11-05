import React from 'react';
import { Column, TableProps } from './types';

const Table =<T,>({ data, strategy, selectedRows, setSelectedRows }: TableProps<T> & { selectedRows?: T[], setSelectedRows?: React.Dispatch<React.SetStateAction<T[]>> }) => {
  
  const defaultStrategy = { columns: [] as Column<T>[] };
  const currentStrategy = strategy ? (strategy as { columns: Column<T>[] }) : defaultStrategy;

  const handleSelectAll = () => {
    if (setSelectedRows) {
      if (selectedRows?.length !== data?.length) {
        if (data) {
          setSelectedRows(data);
        }
      } else {
        setSelectedRows([]);
      }
    }
  };

  const handleSelectRow = (row: T) => {
    if (setSelectedRows) {
      setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(row)) {
          return prevSelectedRows.filter((r) => r !== row);
        } else {
          return [...prevSelectedRows, row];
        }
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {setSelectedRows && (
            <th onClick={handleSelectAll} className="cursor-pointer  border border-dashed border-border">
              <div className='inline-flex gap-2 m-auto px-4 py-2 '>
                <input readOnly type="checkbox" checked={selectedRows?.length ? selectedRows.length > 0 : false} />
                <p>All</p>
              </div>
            </th>
          )}
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
            data-checked={selectedRows?.includes(row)}
            className="hover:bg-hoverTable  cursor-pointer"
            onClick={() => handleSelectRow(row)}
          >
            {setSelectedRows && (
              <td className="border px-4 py-2 border-dashed border-border ">
                  <input readOnly type="checkbox" checked={selectedRows?.includes(row)}  />
              </td>
            )}
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