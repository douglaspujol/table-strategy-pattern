export interface BrazilData {
  number: string;
  name: string;
  phone: string;
  profession: string;
  weight: number;
  height: number;
  status: string;
}

export interface SpainData {
  number: string;
  shirtNumber: string;
  name: string;
  nationality: string;
  team: string;
}
export interface DataItem {
  number: string;
  name: string;
}
export interface SouthKoreaData {
  number: string;
  name: string;
  memberCount: number;
  debutYear: number;
  genre: string;
  label: string;
  hitSong: string;
}

export interface AmericanData {
  number: string;
  party: string;
  name: string;
  stateOfOrigin: string;
  positionHeld: string;
  yearAssumedOffice: number | string;
  age: number;
  politicalIdeology: string;
}

export type CountryCode = 'US' | 'BR' | 'KR' | 'ES';
export interface Country {
  label: string;
  value: CountryCode;
  lengthData: number
}