
export interface Column<T> {
  key: string;
  label: string;
  render: (row: T) => JSX.Element;
}

export interface TableProps<T = unknown>  {
  data?: T[];
  strategy?: {
    columns: Column<T>[];
  } | unknown ; 
}