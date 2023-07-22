import React, { Suspense, useState, startTransition } from "react";
import { useFetch } from "../js/useFetch";
import { fetchData } from "../js/fetchdata";

const firstData = fetchData("https://pokeapi.co/api/v2/pokemon/");

function ListaPokemones() {
  const [apiData, setApiData] = useState(firstData.read);
  console.log(apiData); 
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ul className="card">
          {apiData.results.map((item) => (
            <li key={item.name}>
              <img src="" alt="" />
              <strong>{item.name}</strong>
            </li>
          ))}
          
        </ul>
      </Suspense>
      <button onClick={() => {
            let nextData = fetchData(apiData.next)
            startTransition(() => setApiData(nextData.read))
            console.log('next: ' + apiData)
            }}> Next</button>
    </div>
  );
}

export default ListaPokemones;
