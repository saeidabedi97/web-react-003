import React, { useState } from "react";

const allBreeds = [
  {
    name: "saeid",
    category: "human",
    group: "humans",
    htmlCode: "webweb",
    unicode: "U+451",
  },
  {
    name: "rexi",
    category: "dog",
    group: "animal",
    htmlCode: "webweb",
    unicode: "U+654",
  },
  {
    name: "teddy",
    category: "bear",
    group: "animal",
    htmlCode: "webweb",
    unicode: "U+659",
  },
];

const Inner = ({ selectedBreed, setSelectedBreed }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div data-testid="main" id="main">
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        data-testid="searchbar"
      />
      {/* <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search by name</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search..."
          name="s"
        />
        <button type="submit">Search</button>
      </form> */}
      <table id="header">
        <th className="header-item">name</th>
        <th className="header-item">category</th>
        <th className="header-item">group</th>
        <th className="header-item">htmlCode</th>
        <th className="header-item">unicode</th>
      </table>
      <div>
        {allBreeds
          .filter((x) => x.name.startsWith(searchTerm))
          .map((breed) => (
            <div>
              <table id="header2">
                <td className="data">{breed.name}</td>
                <td className="data">{breed.category}</td>
                <td className="data">{breed.group}</td>
                <td className="data">{breed.htmlCode}</td>
                <td className="data">{breed.unicode}</td>
              </table>
            </div>
          ))}
      </div>
      <pre data-testid="selected-breed">{selectedBreed}</pre>
    </div>
  );
};

export default Inner;
