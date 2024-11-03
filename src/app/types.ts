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
  shirtNumber: string;
  name: string;
  nationality: string;
  team: string;
}

export interface SouthKoreaData {
  name: string;
  memberCount: number;
  debutYear: number;
  genre: string;
  label: string;
  hitSong: string;
}

export interface AmericanData {
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