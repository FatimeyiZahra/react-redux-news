import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { setNewsDetails } from "../redux/actions/NewsAction";
import "./style.css";

const Edit = () => {
  const [checked, setChecked] = useState(true);

  const [newssDetails, setNewsDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://localhost:44313/V1/News/news/${id}`)
      .then((res) => setNewsDetails(res.data));
  }, [id]);
  // console.log(newssDetails)


  const newsDetails = useSelector((state) => state.NewsReducer.newsDetails);
  //   console.log(newsDetails);

  // const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   dispatch(setNewsDetails(id));
  // }, [id]);

  // -----------------------new version start--------------------

  // const [articles, setArticle] = useState({title: newssDetails.title,
  // text: newssDetails.text})
  const onInputChange = (event) => {
    setNewsDetails({ ...newssDetails, [event.target.name]: event.target.value });
  };

  // -----------------------new version end--------------------

  // -----------------------new inputs start--------------------


  const [state, setState] = useState({
    title: newsDetails.title,
    text: newsDetails.text
  });
  const handleChange = e => {
    setState(state => ({ ...state, [e.target.name]: e.target.value }))
  };

  // -----------------------new inputs start--------------------

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

    axios.put(`https://localhost:44313/V1/News/${id}`, article);
    console.log(article);
  };


  return (
    <div className="col-lg-8 padding-top">
      {/* <input
        type="text"
        className="name"
        name="title"
        value={state.title}
        onChange={handleChange}
      />

      <input
        type="text"
        className="email"
        name="text"
        value={state.text}
        onChange={handleChange}
      /> */}
      <form onSubmit={Edit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">id</label>
          <input
            style={{ color: "red" }}
            className="form-control"
            value={newssDetails.id}
          />
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
