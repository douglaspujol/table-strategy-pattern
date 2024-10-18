'use client'

import React from "react";
import Table from "./components/Table";
import { tableStrategies } from "./strategies";
import { dataFetch } from "./mocks";

type CountryCode = 'US' | 'AR' | 'BR';


export default function Home() {
  const [selectedCountry, setSelectedCountry] = React.useState<CountryCode>('AR');

  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value as CountryCode);
    console.log('event: ', event.target.value)
  };

  return (
    <>
      <h1>## Table</h1>
      <select onChange={handleChanged} value={selectedCountry} className="mb-2">
        <option value="US">United States</option>
        <option value="AR">Argentina</option>
        <option value="BR">Brazil</option>
      </select>
      <Table strategies={tableStrategies[selectedCountry]} data={dataFetch[selectedCountry]} />
    </>
  );
}
