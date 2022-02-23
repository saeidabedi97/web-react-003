import React, { useState } from "react";
import useSWR from "swr";

const LIST_ALL_BREEDS_ENDPOINT = "https://emojihub.herokuapp.com/api/all";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);
  // const [selectedBreed, setSelectedBreed] = useState();
  const listOfBreeds = Object(data);

  return (
    <div>
      <pre>{JSON.stringify(listOfBreeds, null, 2)};</pre>
    </div>
  );
};
export default App;
