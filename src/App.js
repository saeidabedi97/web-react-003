import React, { useState } from "react";
import useSWR from "swr";

const LIST_ALL_BREEDS_ENDPOINT = "https://emojihub.herokuapp.com/api/all";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);
  // const [listOfBreeds, setListOfBreeds] = useState(data);
  const listOfBreeds = Object(data);
  return (
    <div>
      {/* <pre>{JSON.stringify(listOfBreeds, null, 8)}</pre> */}

      {data
        ? listOfBreeds.map((item) => {
            return (
              <div>
                <table>
                  <tr>
                    <th>name</th>
                    <th>category</th>
                    <th>group</th>
                    <th>htmlCode</th>
                    <th>unicode</th>
                  </tr>
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
