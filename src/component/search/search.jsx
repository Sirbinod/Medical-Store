import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
const Search = () => {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
  };

  const handleOnHover = (result) => {
    // the item hovered
  };

  const handleOnSelect = (item) => {
    // the item selected
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };
  return (
    <div style={{ width: 500 }}>
      <ReactSearchAutocomplete
        items={items}
        placeholder='Search in Pharmamandu'
        // onSearch={handleOnSearch}
        // onHover={handleOnHover}
        // onSelect={handleOnSelect}
        // onFocus={handleOnFocus}
        // autoFocus
        // formatResult={formatResult}
      />
    </div>
  );
};

export default Search;
