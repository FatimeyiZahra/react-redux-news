import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { setAllCategory } from "../../../redux/actions/CategoryAction";

const Category = () => {
  const allCategories = useSelector(
    (state) => state.CategoryReducer.allCategory
  );
  // console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(setAllCategory())
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
