import Table from "./components/Table";
import { dataArgentina } from "./mocks";
import { tableStrategies } from "./strategies";

export default function Home() {
  return (
    <>
      <h1>## Table</h1>
      <p className="max-w-[55rem] my-8">
        In this project, I implemented a dynamic 
        table using the <a>[Strategy Pattern]</a> for a more 
        modular and extensible approach. 
        Utilizing this pattern allows the rendering 
        logic to be decoupled, making it easier to switch 
        and add new strategies as needed.
      </p>
      <select onChange={()=>console.log('changed')} defaultValue="US" className="mb-2">
        <option value="US">United States</option>
        <option value="AR">Argentina</option>
        <option value="BR">Brazil</option>
      </select>
      <Table columns={tableStrategies['AR'].columns} data={dataArgentina}/>
    </>
  );
}
