import React, { useState } from "react";

const SearchFilter = ({ items }) => {
  const [searchItem, setsearchItem] = useState("");
  const [FilterItem, setFilterItem] = useState(items);

  const handleSearch = (e) => {
    const searchItem = e.target.value.toLowerCase();
    setsearchItem(searchItem);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchItem)
    );
    setFilterItem(filtered);
  };

  return (
    <div>
      <h3>Search and Filter</h3>
      <input
        type="text"
        placeholder="Search items"
        value={searchItem}
        onChange={handleSearch}
      />
      <ul>
        {FilterItem.map((item, index) => (
          <li style={{ textAlign: "left" }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
