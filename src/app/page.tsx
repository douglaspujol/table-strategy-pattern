'use client'
import React from 'react';
import {  CountryCode, Country } from './types';
import  Table  from './components/Table';
import { americanData, brazilData, southKoreaData, spainData, countriesTab, textCountriesTab } from './mocks';
import { tableStrategies } from './strategies';


export default function Home() {

  const [strategy, setStrategy] = React.useState<unknown>(tableStrategies['BR']); 
  const [data, setData] = React.useState<unknown[]>(brazilData)
  const [activeTab, setActiveTab] = React.useState('Brazil');
  const [textTab, setTextTab] = React.useState<CountryCode>('BR');

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
  
  const handleTabChange = ({label, value} : Country) => {
    setActiveTab(label);
    updateDataAndStrategy(value);
    setTextTab(value)
  };

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

      <ul className="flex flex-wrap mt-12">
        {countriesTab.map(country => (
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

      <div className='max-w-[55rem] my-6'>
        <p>{textCountriesTab[textTab]}</p>
      </div>

      <div className='flex align-middle gap-4'>
        <div className="mb-6 p-2 w-auto inline-flex items-center border border-dashed border-border focus-within:border-hoverContentTable hover:border-hoverContentTable group">
          <input 
            type="search" 
            className="w-72  text-font text-base bg-transparent focus:outline-none" 
            placeholder="Enter name or number to search"
          />
          <div>
            <svg 
              className="h-4 text-font group-hover:text-hoverContentTable group-focus-within:text-hoverContentTable" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 20 20"
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" 
              />
            </svg>
          </div>
        </div>
        <select 
          className="mb-6 bg-transparent border hover:border-hoverContentTable border-border border-dashed  px-2 py-2 text-font text-base focus:outline-none"
          >
          <option defaultValue={''}>Sort By Creation Date</option>
          <option value="0">Oldest</option>
          <option value="1">Newest</option>
        </select>
      </div>


      <Table
        strategy={strategy}
        data={data}
       />
    </>
  );
}
