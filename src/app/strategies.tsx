import { dataAPIAmericano, dataAPIArgentina, dataAPIBrasil } from "./mocks";

export const tableStrategies = {
  BR: {
    columns: [
      {
        key: 'number',
        label: 'Número',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-br`} className="px-4 py-2 border border-dashed border-border">{row.number}</td>
        ),
      },
      {
        key: 'name',
        label: 'Nome',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-name`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'phone',
        label: 'Telefone',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-phone`} className="px-4 py-2 border border-dashed border-border">{row.phone}</td>
        ),
      },
      {
        key: 'profession',
        label: 'Profissão',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-profession`} className="px-4 py-2 border border-dashed border-border">{row.profession}</td>
        ),
      },
      {
        key: 'weight',
        label: 'Peso (kg)',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-weight`} className="px-4 py-2 border border-dashed border-border">{row.weight}</td>
        ),
      },
      {
        key: 'height',
        label: 'Altura (cm)',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-height`} className="px-4 py-2 border border-dashed border-border">{row.height}</td>
        ),
      },
      {
        key: 'status',
        label: 'Status',
        render: (row: dataAPIBrasil): JSX.Element => (
          <td key={`${row.number}-status`} className="px-4 py-2 border border-dashed border-border">{row.status}</td>
        ),
      },
    ],
  },
  AR: {
    columns: [
      {
        key: 'number',
        label: 'Número',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-ar`} className="px-4 py-2 border border-dashed border-border">{row.number}</td>
        ),
      },
      {
        key: 'name',
        label: 'Nombre',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-name`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'phone',
        label: 'Teléfono',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-phone`} className="px-4 py-2 border border-dashed border-border">{row.phone}</td>
        ),
      },
      {
        key: 'profession',
        label: 'Profesión',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-profession`} className="px-4 py-2 border border-dashed border-border">{row.profession}</td>
        ),
      },
      {
        key: 'weight',
        label: 'Peso (kg)',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-weight`} className="px-4 py-2 border border-dashed border-border">{row.weight}</td>
        ),
      },
      {
        key: 'height',
        label: 'Altura (cm)',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-height`} className="px-4 py-2 border border-dashed border-border">{row.height}</td>
        ),
      },
      {
        key: 'status',
        label: 'Estado',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-status`} className="px-4 py-2 border border-dashed border-border">{row.status}</td>
        ),
      },
      {
        key: 'cidade',
        label: 'Ciudad',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-cidade`} className="px-4 py-2 border border-dashed border-border">{row.cidade}</td>
        ),
      },
      {
        key: 'estado',
        label: 'Estado',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-estado`} className="px-4 py-2 border border-dashed border-border">{row.estado}</td>
        ),
      },
      {
        key: 'salario',
        label: 'Salario (AR$)',
        render: (row: dataAPIArgentina): JSX.Element => (
          <td key={`${row.number}-salario`} className="px-4 py-2 border border-dashed border-border">{row.salario}</td>
        ),
      },
    ],
  },
  US: {
    columns: [
      {
        key: 'id',
        label: 'ID',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-us`} className="px-4 py-2 border border-dashed border-border">{row.id}</td>
        ),
      },
      {
        key: 'titulo',
        label: 'Title',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-titulo`} className="px-4 py-2 border border-dashed border-border">{row.titulo}</td>
        ),
      },
      {
        key: 'descricao',
        label: 'Description',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-descricao`} className="px-4 py-2 border border-dashed border-border">{row.descricao}</td>
        ),
      },
      {
        key: 'ativo',
        label: 'Active',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-ativo`} className="px-4 py-2 border border-dashed border-border">{row.ativo ? 'Yes' : 'No'}</td>
        ),
      },
      {
        key: 'dataCriacao',
        label: 'Creation Date',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-dataCriacao`} className="px-4 py-2 border border-dashed border-border">{row.dataCriacao}</td>
        ),
      },
      {
        key: 'cidade',
        label: 'City',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-cidade`} className="px-4 py-2 border border-dashed border-border">{row.cidade}</td>
        ),
      },
      {
        key: 'estado',
        label: 'State',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-estado`} className="px-4 py-2 border border-dashed border-border">{row.estado}</td>
        ),
      },
      {
        key: 'salario',
        label: 'Salary (US$)',
        render: (row: dataAPIAmericano): JSX.Element => (
          <td key={`${row.id}-salario`} className="px-4 py-2 border border-dashed border-border">{row.salario}</td>
        ),
      },
    ],
  },
};
