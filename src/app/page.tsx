'use client'
import React from 'react';
import {  CountryCode } from './types';
import { Table } from './components/Table';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = React.useState<CountryCode>('BR');

  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value as CountryCode);
  };



  return (
    <>
      <h1>## Table</h1>
      <select onChange={handleChanged} value={selectedCountry} className="mb-2">
        <option value="US">United States</option>
        <option value="AR">Argentina</option>
        <option value="BR">Brazil</option>
        <option value="KR">South Korea</option>
        <option value="ES">Spain</option>
      </select>

      <Table
       />
    </>
  );
}
