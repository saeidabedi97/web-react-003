import React from "react";

const Inner = ({ selectedBreed, setSelectedBreed, allBreeds }) => (
  <div data-testid="main" id="main">
    <table id="header">
      <th className="header-item">name</th>
      <th className="header-item">category</th>
      <th className="header-item">group</th>
      <th className="header-item">htmlCode</th>
      <th className="header-item">unicode</th>
    </table>
    <div>
      {allBreeds.map((breed) => (
        <div>
          <table id="header2">
            <tr>
              <td className="data">{breed.name}</td>
              <td className="data">{breed.category}</td>
              <td className="data">{breed.group}</td>
              <td className="data">{breed.htmlCode}</td>
              <td className="data">{breed.unicode}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
    <pre data-testid="selected-breed">{selectedBreed}</pre>
  </div>
);

export default Inner;
