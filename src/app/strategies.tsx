import { BrazilData, SpainData, SouthKoreaData, AmericanData } from './types';

type TableColumn<T> = {
  key: string;
  label: string;
  render: (row: T) => JSX.Element;
};

type BrazilColumn = TableColumn<BrazilData>;

type SouthKoreaColumn = TableColumn<SouthKoreaData>;

type AmericanColumn = TableColumn<AmericanData>;

type SpainColumn = TableColumn<SpainData>;

export const tableStrategies = {
  BR: {
    columns: [
      {
        key: 'number',
        label: 'Número',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-br`} className="px-4 py-2 border border-dashed border-border">{row.number}</td>
        ),
      },
      {
        key: 'name',
        label: 'Nome',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-name`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'phone',
        label: 'Telefone',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-phone`} className="px-4 py-2 border border-dashed border-border">{row.phone}</td>
        ),
      },
      {
        key: 'profession',
        label: 'Profissão',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-profession`} className="px-4 py-2 border border-dashed border-border">{row.profession}</td>
        ),
      },
      {
        key: 'weight',
        label: 'Peso (kg)',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-weight`} className="px-4 py-2 border border-dashed border-border">{row.weight}</td>
        ),
      },
      {
        key: 'height',
        label: 'Altura (cm)',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-height`} className="px-4 py-2 border border-dashed border-border">{row.height}</td>
        ),
      },
      {
        key: 'status',
        label: 'Status',
        render: (row: BrazilData): JSX.Element => (
          <td key={`${row.number}-status`} className="px-4 py-2 border border-dashed border-border">{row.status}</td>
        ),
      },
    ] as BrazilColumn[],
  },
  KR: {
    columns: [
      {
        key: 'name',
        label: '이름',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-kr`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'memberCount',
        label: '멤버 수',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-memberCount`} className="px-4 py-2 border border-dashed border-border">{row.memberCount}</td>
        ),
      },
      {
        key: 'debutYear',
        label: '데뷔 연도',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-debutYear`} className="px-4 py-2 border border-dashed border-border">{row.debutYear}</td>
        ),
      },
      {
        key: 'genre',
        label: '장르',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-genre`} className="px-4 py-2 border border-dashed border-border">{row.genre}</td>
        ),
      },
      {
        key: 'label',
        label: '레이블',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-label`} className="px-4 py-2 border border-dashed border-border">{row.label}</td>
        ),
      },
      {
        key: 'hitSong',
        label: '히트곡',
        render: (row: SouthKoreaData): JSX.Element => (
          <td key={`${row.name}-hitSong`} className="px-4 py-2 border border-dashed border-border">{row.hitSong}</td>
        ),
      },
    ] as SouthKoreaColumn[],
  },
  US: {
    columns: [
      {
        key: 'party',
        label: 'Party',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.party}-us`} className="px-4 py-2 border border-dashed border-border">{row.party}</td>
        ),
      },
      {
        key: 'name',
        label: 'Name',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.name}-name`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'stateOfOrigin',
        label: 'State of Origin',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.stateOfOrigin}-state`} className="px-4 py-2 border border-dashed border-border">{row.stateOfOrigin}</td>
        ),
      },
      {
        key: 'positionHeld',
        label: 'Position Held',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.positionHeld}-position`} className="px-4 py-2 border border-dashed border-border">{row.positionHeld}</td>
        ),
      },
      {
        key: 'yearAssumedOffice',
        label: 'Year Assumed Office',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.yearAssumedOffice}-year`} className="px-4 py-2 border border-dashed border-border">{row.yearAssumedOffice}</td>
        ),
      },
      {
        key: 'age',
        label: 'Age',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.age}-age`} className="px-4 py-2 border border-dashed border-border">{row.age}</td>
        ),
      },
      {
        key: 'politicalIdeology',
        label: 'Political Ideology',
        render: (row: AmericanData): JSX.Element => (
          <td key={`${row.politicalIdeology}-ideology`} className="px-4 py-2 border border-dashed border-border">{row.politicalIdeology}</td>
        ),
      },
    ] as AmericanColumn[],
  },
  ES: {
    columns: [
      {
        key: 'shirtNumber',
        label: 'Número de Camiseta',
        render: (row: SpainData): JSX.Element => (
          <td key={`${row.shirtNumber}-es`} className="px-4 py-2 border border-dashed border-border">{row.shirtNumber}</td>
        ),
      },
      {
        key: 'name',
        label: 'Nombre',
        render: (row: SpainData): JSX.Element => (
          <td key={`${row.name}-name`} className="px-4 py-2 border border-dashed border-border">{row.name}</td>
        ),
      },
      {
        key: 'nationality',
        label: 'Nacionalidad',
        render: (row: SpainData): JSX.Element => (
          <td key={`${row.nationality}-nationality`} className="px-4 py-2 border border-dashed border-border">{row.nationality}</td>
        ),
      },
      {
        key: 'team',
        label: 'Equipo',
        render: (row: SpainData): JSX.Element => (
          <td key={`${row.team}-team`} className="px-4 py-2 border border-dashed border-border">{row.team}</td>
        ),
      },
    ] as SpainColumn[],
  },
};
