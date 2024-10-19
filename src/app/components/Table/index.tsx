import { DataAPI } from './types'

type Column<T> = {
  key: string
  label: string
  render: (row: T) => JSX.Element
}

interface StrategyType<T> {
  columns: Column<T>[]
}

interface TableProps<T extends DataAPI> {
  strategies: StrategyType<T>
  data: T[]
}

export default function Table<T extends DataAPI>({
  strategies,
  data,
}: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {strategies.columns.map((col) => (
            <th
              key={col.key}
              className="px-4 py-2 border border-dashed border-border"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-hoverTable">
            {strategies.columns.map((col) => col.render(row))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
