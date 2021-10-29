import React, { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { setNewsDetails } from "../redux/actions/NewsAction";
import "./style.css";

const Create = () => {

  const titleRef = useRef();
  const textRef = useRef();

  const Create=(e)=>{
    e.preventDefault();
    const article={
      title:`${titleRef.current.value}`,
      text:`${textRef.current.value}`
     }

     axios.post(`https://localhost:44313/V1/News`,article)
    .then(res=>console.log(res.data));
     
  }

  return (
    <div className="col-lg-8 padding-top">
      <form  onSubmit={Create}>
        <div class="form-group">
          <label for="exampleInputEmail1">title</label>
          <input
            type="text"
            class="form-control"
            // onChange={onInputChange}
            ref={titleRef}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">text</label>
          <textarea
            type="text"
            class="form-control"
            // onChange={onInputChange}
            ref={textRef}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            active?
          </label>
        </div>
        {/* <Link to={`/newsList`}> */}
          <button 
          // onClick={saveChange}
          class="btn btn-primary" type="submit"
          >
            save
          </button>
        {/* </Link> */}
{/* 
        <Link to={`/newsList`}>
          <button class="btn btn-primary" type="submit">
            cancel
          </button>
        </Link> */}
      </form>
    </div>
  );
};

export default Create;

