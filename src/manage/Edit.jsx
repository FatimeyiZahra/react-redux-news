import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setNewsDetails } from "../redux/actions/NewsAction";
import "./style.css"

const Edit = () => {
  const newsDetails = useSelector((state) => state.NewsReducer.newsDetails);
//   console.log(newsDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setNewsDetails(id));
  }, []);
  const onInputChange = (event) =>{
      
  }
   
  return (
  <div className="padding-top">
      <ul>
          <li><textarea  onChange={onInputChange} value={newsDetails.title}></textarea></li>
          <li><textarea  onChange={onInputChange} value={newsDetails.text}></textarea></li>
          <li><button>save</button></li>
          <li><button>cancel</button></li>
      </ul>
  </div>
  );
};

export default Edit;
