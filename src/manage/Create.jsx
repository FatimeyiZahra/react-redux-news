import React, { useRef } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

const Create = () => {
  const titleRef = useRef();
  const textRef = useRef();

  const Create = (e) => {
    e.preventDefault();
    const article = {
      title: `${titleRef.current.value}`,
      text: `${textRef.current.value}`,
    };

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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            active?
          </label>
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
