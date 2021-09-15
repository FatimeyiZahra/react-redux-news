import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { getAllNews } from "../redux/actions/NewsAction";

const NewsList = () => {
  const allNews = useSelector((state) => state.AllNewsReducer.allNews);
  console.log(allNews);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://localhost:44313/V1/News/AllNews")
      .then((res) => dispatch(getAllNews(res.data)));
  }, []);
  return (
    <section id="newslist">
      <div className="container">
        <div className="newslistcontainer">
            <div className="col-lg-3">
            <Link to="/create">
            <button type="button" class="btn btn-success">create</button>
            </Link>
            </div>
          <div className="col-lg-8">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allNews &&
                  allNews.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>
                        <Link to={`/edit/${item.id}`}><button type="button" class="btn btn-warning">edit</button></Link>
                        <Link to={`/details/${item.id}`}><button type="button" class="btn btn-info">details</button></Link>
                        <Link to="as"><button type="button" class="btn btn-danger">delete</button></Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
