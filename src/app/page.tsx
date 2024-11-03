'use client'
import React from 'react';
import {  CountryCode, Country } from './types';
import  Table  from './components/Table';
import { americanData, brazilData, southKoreaData, spainData } from './mocks';
import { tableStrategies } from './strategies';


export default function Home() {

  const [strategy, setStrategy] = React.useState<unknown>(tableStrategies['BR']); 
  const [data, setData] = React.useState<unknown[]>(brazilData)
  const [activeTab, setActiveTab] = React.useState('Brazil');

  const updateDataAndStrategy =React.useCallback((country: CountryCode) => {
    switch (country) {
      case 'BR':
        setData(brazilData);
        setStrategy(tableStrategies[country]);
        break;
      case 'US':
        setData(americanData);
        setStrategy(tableStrategies[country]); 
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
  
  const handleTabChange = ({label, value}:Country) => {
    setActiveTab(label);
    updateDataAndStrategy(value as CountryCode);
  };

  const countries: Country[] = [
    { label: 'Brazil', value: 'BR', lengthData: brazilData.length },
    { label: 'United States', value: 'US', lengthData: americanData.length  },
    { label: 'South Korea', value: 'KR', lengthData: southKoreaData.length },
    { label: 'Spain', value: 'ES', lengthData: spainData.length },
  ];

  return (
    <>
      <div className='border-b max-w-[55rem] border-border border-dashed'>
        <h1>## Table</h1>
        <p className="mb-4">
          In this project, I implemented a dynamic 
          table using the <a href='https://dev.to/douglaspujol/como-criar-componentes-globais-e-dinamicos-com-strategy-pattern-em-react-5960' target='_blank'>[Strategy Pattern]</a> for a more 
          modular and extensible approach. 
          Utilizing this pattern allows the rendering 
          logic to be decoupled, making it easier to switch 
          and add new strategies as needed.
        </p>
      </div>

      <ul className="flex flex-wrap my-10">
        {countries.map(country => (
          <li key={country.value} className="me-2 cursor-pointer" onClick={() => handleTabChange(country)}>
            <p className={`inline-block p-2 border-b ${
                activeTab === country.label ? 'text-anchor border-anchor' : 'border-transparent hover:text-anchor hover:border-anchor'
              }`}>
              {country.label} 
              ({country.lengthData})
            </p>
          </li>
        ))}
      </ul>

      <Table
        strategy={strategy}
        data={data}
       />
       
    </>
  );
}
