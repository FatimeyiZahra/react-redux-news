import React, { useRef, useState,useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setAllCategory } from "../redux/actions/CategoryAction";

const Create = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const [checked, setChecked] = useState(false);
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const allCategories = useSelector(
    (state) => state.CategoryReducer.allCategory
  );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //  dispatch(setAllCategory())
  // }, []);

  const handleSelect = function (selectedItems) {
    const flavors = [];
    for (let i = 0; i < selectedItems.length; i++) {
      flavors.push(selectedItems[i].value);
    }
    setSelectedFlavors(flavors);
    console.log(flavors);
  };
  const Create = (e) => {
    e.preventDefault();
    const article = {
      title: `${titleRef.current.value}`,
      text: `${textRef.current.value}`,
      status: checked,
      categoryId:selectedFlavors
    };
    console.log(article)

    axios
      .post(`https://localhost:44313/V1/News`, article)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="col-lg-8 padding-top">
      <form onSubmit={Create}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">title</label>
          <input
            type="text"
            className="form-control"
            // onChange={onInputChange}
            ref={titleRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">text</label>
          <textarea
            type="text"
            className="form-control"
            // onChange={onInputChange}
            ref={textRef}
          />
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
        <div className="form-check">
          <input
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
        </div>
        {/* <Link to={`/newsList`}> */}
        <button
          // onClick={saveChange}
          className="btn btn-primary"
          type="submit"
        >
          save
        </button>
        {/* </Link> */}

        <Link to={`/newsList`}>
          <p className="btn btn-primary">cancel</p>
        </Link>
      </form>
    </div>
  );
};

export default Create;
