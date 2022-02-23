import React, { useState } from "react";
import useSWR from "swr";

const LIST_ALL_BREEDS_ENDPOINT = "https://dog.ceo/api/breeds/list/all";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);

  return <div>{JSON.stringify(data)}</div>;
  // const [selectedBreed, setSelectedBreed] = useState(null);
  // const listOfBreeds = Object.keys(DATA.message);
  // return (
  //   <div>
  //     {selectedBreed}
  //     <ul>
  //       {listOfBreeds.map((breed) => (
  //         <li>
  //           <button onClick={() => setSelectedBreed(breed)}>{breed}</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default App;
