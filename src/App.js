import React, { useState } from "react";
import useSWR from "swr";

const LIST_ALL_BREEDS_ENDPOINT = "https://emojihub.herokuapp.com/api/all";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = (arr, chunk) => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);
  // const [selectedBreed, setSelectedBreed] = useState(data);
  const [listOfBreeds, setListOfBreeds] = useState(data);
  // const listOfBreeds = Object(data);
  return (
    <div>
      {/* <pre>{JSON.stringify(listOfBreeds, null, 8)}</pre> */}

      {data
        ? data.map((item) => {
            return (
              <div>
                {/* <ul>
                  <li>{item.name}</li>
                  <li>{item.category}</li>
                  <li>{item.group}</li>
                  <li>{item.htmlCode}</li>
                  <li>{item.unicode}</li>
                </ul> */}
                <table>
                  <tr>
                    <th>name</th>
                    <th>category</th>
                    <th>group</th>
                    <th>htmlCode</th>
                    <th>unicode</th>
                  </tr>
                  <br></br>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.group}</td>
                    <td>{item.htmlCode}</td>
                    <td>{item.unicode}</td>
                  </tr>
                </table>
              </div>
            );
          })
        : "loading"}
    </div>
  );
};

export default App;
