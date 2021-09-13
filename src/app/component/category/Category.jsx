import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getAllCategory } from "../../../redux/actions/CategoryAction";

const Category = () => {
  const allCategories = useSelector(
    (state) => state.CategoryReducer.allCategory
  );
  console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://localhost:44313/V1/News/categories")
      .then((res) => dispatch(getAllCategory(res.data)));
  }, []);
  return (
    <>
      {allCategories &&
        allCategories.map((item) => (
          <li key={item.id} className="nav-item dropdown">
            <Link to={`/category/${item.id}`} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
    </>
  );
};

export default Category;
