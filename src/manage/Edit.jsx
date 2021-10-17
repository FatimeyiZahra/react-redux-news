import React, { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import { setNewsDetails } from "../redux/actions/NewsAction";
import "./style.css";

const Edit = () => {
  const newsDetails = useSelector((state) => state.NewsReducer.newsDetails);
  //   console.log(newsDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  // const [title, setstate] = useState(initialState)

  useEffect(() => {
    dispatch(setNewsDetails(id));
  }, []);
  const onInputChange = (event) => {};

  const titleRef = useRef();
  const textRef = useRef();

  const saveChange=()=>{
    const article = {
      method : "PUT",
      headers: { 'Content-Type': 'application/json' },
     body : JSON.stringify({title:`${titleRef.current.value}`,
                            text:`${textRef.current.value}`})
     }
     fetch(`https://localhost:44313/V1/News/${id}`,article)
     .then(res => res.json()) 
     .then(data => console.log(data))
     
  }

  return (
    <div className="col-lg-8 padding-top">
      <form method="post">
        <div class="form-group">
          <label for="exampleInputEmail1">title</label>
          <input
            type="text"
            class="form-control"
            onChange={onInputChange}
            // value={newsDetails.title}
            ref={titleRef}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">text</label>
          <textarea
            type="text"
            class="form-control"
            onChange={onInputChange}
            // value={newsDetails.text}
            ref={textRef}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            active?
          </label>
        </div>
        <Link to={`/newsList`}>
          <button 
          onClick={saveChange}
          class="btn btn-primary" type="submit"
          >
            save
          </button>
        </Link>

        <Link to={`/newsList`}>
          <button class="btn btn-primary" type="submit">
            cancel
          </button>
        </Link>
      </form>

      {/* 
      <ul>
        <li>
          <textarea
            onChange={onInputChange}
            value={newsDetails.title}
          ></textarea>
        </li>
        <li>
          <textarea
            onChange={onInputChange}
            value={newsDetails.text}
          ></textarea>
        </li>
        <Link to={`/newsList`}>
          <li>
            <button>save</button>
          </li>
        </Link>

        <Link to={`/newsList`}>
          <li>
            <button>cancel</button>
          </li>
        </Link>
      </ul> */}
    </div>
  );
};

export default Edit;
