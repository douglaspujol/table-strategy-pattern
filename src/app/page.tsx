'use client'
import React from 'react'
import Table from './components/Table'
import { CountryCode, DataAPIMap } from './components/Table/types'
import { dataFetch } from './mocks'
import { tableStrategies } from './strategies'

export default function Home() {
  const [selectedCountry, setSelectedCountry] =
    React.useState<CountryCode>('AR')

  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value as CountryCode)
  }

  return (
    <>
      <h1>## Table</h1>
      <select onChange={handleChanged} value={selectedCountry} className="mb-2">
        <option value="US">United States</option>
        <option value="AR">Argentina</option>
        <option value="BR">Brazil</option>
      </select>
      <Table<DataAPIMap[typeof selectedCountry]>
        strategies={tableStrategies[selectedCountry]}
        data={
          dataFetch[selectedCountry] as DataAPIMap[typeof selectedCountry][]
        }
      />
    </>
  )
}
