import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { editNewsDetails, setNewsDetails } from "../redux/actions/NewsAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css";


const Edit = () => {
  const [checked, setChecked] = useState(true);
  const [newssDetails, setNewsDetails] = useState({ title: '',text:'',status:false,categoryId:[] });
  console.log(newssDetails)

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://localhost:44313/V1/News/news/${id}`)
      .then((res) => setNewsDetails(res.data));
  }, [id]);

  // const newsDetails = useSelector((state) => state.NewsReducer.newsDetails);
  //   console.log(newsDetails);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setNewsDetails (id));
  // }, [id]);

  const onInputChange = (event) => {
    setNewsDetails({ ...newssDetails, [event.target.name]: event.target.value });
  };

  const titleRef = useRef();
  const textRef = useRef();
  
  const Edit = (e) => {
    e.preventDefault();
    const article = {
      id: newssDetails.id,
      title: `${titleRef.current.value}`,
      text: `${textRef.current.value}`,
      status: checked
    };
    dispatch(editNewsDetails(id,article,history.push));
    // axios.put(`https://localhost:44313/V1/News/${id}`, article);
    console.log(article);
  };


  return (
    <div className="col-lg-8 padding-top">
      <form onSubmit={Edit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">id</label>
          {/* <input
            style={{ color: "red" }}
            className="form-control"
            value={newssDetails.id}
          /> */}
          <label htmlFor="exampleInputEmail1">title</label>
          <input
            type="text"
            className="form-control"
            onChange={onInputChange}
            name="title"
            value={newssDetails.title}
            ref={titleRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">text</label>
          <textarea
            type="text"
            name="text"
            className="form-control"
            onChange={onInputChange}
            value={newssDetails.text}
            ref={textRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">id</label>
          {/* <input
            style={{ color: "red" }}
            className="form-control"
            value={newssDetails.id}
          /> */}
          <label htmlFor="exampleInputEmail1">categories</label>
          <input
            type="text"
            className="form-control"
            onChange={onInputChange}
            name="title"
            value={newssDetails.categoryName}
          />
        </div>
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

export default Edit;
