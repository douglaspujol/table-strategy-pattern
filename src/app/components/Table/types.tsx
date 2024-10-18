// types.tsx

export type Column<RowType> = {
  key: string | number;
  label: string;
  render: (row: RowType) => JSX.Element;
};

export interface StrategyType<RowType> {
  columns: Column<RowType>[];
}

export interface TableProps<RowType> {
  strategies: StrategyType<RowType>;
  data: RowType[]; 
}
