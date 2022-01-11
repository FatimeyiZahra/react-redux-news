import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const ChooseYourCharacter = function (props) {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [allCategories, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:44313/V1/News/categories/${region}`)
      .then((res) => setCategory(res.data));
  }, []);

  const [region, setRegion] = useState("");
  console.log(region)
  const handleSelectFilter = (event) => {
    setRegion(event.target.value);
  
  };

  // console.log(allCategories);
  const handleSelect = function (selectedItems) {
    const flavors = [];
    for (let i = 0; i < selectedItems.length; i++) {
      flavors.push(selectedItems[i].value);
    }
    setSelectedFlavors(flavors);
    console.log(flavors);
  };
  // const selected=selectedFlavors;
  // console.log(selected)

  return (
    <form className="padding-top">
      <div className="filter-wrapper">
        <select
          className="filter-select"
          value={region}
          onChange={handleSelectFilter}
        >
          <option value="">Search by Region</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <select
        multiple={true}
        value={selectedFlavors}
        onChange={(e) => {
          handleSelect(e.target.selectedOptions);
        }}
      >
        {allCategories &&
          allCategories.map((item) => (
            <option key={item.id} value={item.id}>
              {" "}
              {item.name}
            </option>
          ))}
      </select>
    </form>
  );
};

export default ChooseYourCharacter;
