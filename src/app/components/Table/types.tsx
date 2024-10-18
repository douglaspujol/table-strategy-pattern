// Definindo RowData como um objeto com chaves e valores dinâmicos
export interface RowData<T extends Record<string, unknown>> {
  [key: string]: T[keyof T]; // permite que a interface seja flexível para qualquer chave
}

// Definindo a interface Column com um tipo genérico T
export interface Column<T extends Record<string, unknown>> {
  key: string | number; // 'key' deve ser um tipo string ou number
  label: string;
  render: (row: T) => JSX.Element;
}

// Definindo a interface TableProps com o tipo genérico T
export interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];  // Mantendo a tipagem genérica
  data: T[];             // Utilizando o tipo genérico T
}