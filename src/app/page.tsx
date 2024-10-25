'use client'
import React from 'react';
import {  CountryCode } from './types';
import  Table  from './components/Table';
import { americanData, brazilData, southKoreaData, spainData } from './mocks';
import { tableStrategies } from './strategies';

export default function Home() {

  const [strategy, setStrategy] = React.useState<unknown>(tableStrategies['BR']); 
  const [selectedCountry, setSelectedCountry] = React.useState<CountryCode>('BR');
  const [data, setData] = React.useState<unknown[]>(brazilData)

  const updateDataAndStrategy =React.useCallback((country: CountryCode) => {
    switch (country) {
      case 'BR':
        setData(brazilData);
        setStrategy(tableStrategies[country]);
        break;
      case 'US':
        setData(americanData);
        setStrategy(tableStrategies[country]); // Se houver estratégia para os EUA
        break;
      case 'ES':
        setData(spainData);
        setStrategy(tableStrategies[country]); 
        break;
      case 'KR':
        setData(southKoreaData);
        setStrategy(tableStrategies[country]);
        break;
      default:
        setData([]); 
        setStrategy({});
        break;
    }
  }, []);
  
  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as CountryCode;
    setSelectedCountry(selected);
    updateDataAndStrategy(selected); // Chame o useCallback aqui
  };

  return (
    <>
      <h1>## Table</h1>
      <p className="max-w-[55rem] mb-6">
        In this project, I implemented a dynamic 
        table using the <a href='https://www.google.com' target='_blank'>[Strategy Pattern]</a> for a more 
        modular and extensible approach. 
        Utilizing this pattern allows the rendering 
        logic to be decoupled, making it easier to switch 
        and add new strategies as needed.
      </p>
      <select onChange={handleChanged} value={selectedCountry} 
         className="mb-6 bg-transparent border hover:border-hoverContentTable border-border border-dashed  px-4 py-2 text-font focus:outline-none"
        >
        <option value="US">United States</option>
        <option value="BR">Brazil</option>
        <option value="KR">South Korea</option>
        <option value="ES">Spain</option>
        <option value="AR">Argentina</option>
      </select>

      <Table
        strategy={strategy}
        data={data}
       />
    </>
  );
}
