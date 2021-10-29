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

  const Edit=(e)=>{
    e.preventDefault();
    const article = {
      method : "PUT",
      headers: { 'Content-Type': 'application/json' },
     body : JSON.stringify({
                            id:newsDetails.id,
                            title:`${titleRef.current.value}`,
                            text:`${textRef.current.value}`
                          })
     }
     fetch(`https://localhost:44313/V1/News/${id}`,article)
     console.log(article)
     .then(res => res.json()) 
     console.log(article)
     .then(data => console.log(data))
    // const article={ id:newsDetails.id,
    //                         title:`${titleRef.current.value}`,
    //                         text:`${textRef.current.value}`
    //            }

    // axios.put(`https://localhost:44313/V1/News/${id}`,article)
    // console.log(article)
    // .then(res=>console.log(res.data))
     
    //  axios.put(`https://localhost:44313/V1/News/${id}`,
    //  {            id:newsDetails.id,
    //                           title:`${titleRef.current.value}`,
    //                           text:`${textRef.current.value}`
    //              }
     
    //  )
    // .then(res=>console.log(res.data))
  }

  return (
    <div className="col-lg-8 padding-top">
      <form onSubmit={Edit}>
        <div class="form-group">
        <label for="exampleInputEmail1">id</label>
          <input
          style={{color:'red'}}
            type="text"
            class="form-control"
            onChange={onInputChange}
            // ref={idRef}
            value={newsDetails.id}
          />
          <label for="exampleInputEmail1">title</label>
          <input
            type="text"
            class="form-control"
            onChange={onInputChange}
            name="title"
            // value={newsDetails.title}
            ref={titleRef}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">text</label>
          <textarea
            type="text"
            name="text"
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

export default Edit;
