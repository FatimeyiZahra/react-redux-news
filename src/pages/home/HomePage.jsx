import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllNews } from "../../redux/actions/NewsAction";

const HomePage = () => {
  const allNews = useSelector((state) => state.NewsReducer.news);
    // console.log(allNews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews())
  }, []);

  // if(allNews){
  //  allNews.map((item)=>{
  //   console.log(item.categoryName.map(val => console.log(val)))

  //  })
  // }

  return (
    <section id="last-added">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="news-head last-before m-r-10">
              <h3 className="news-category last-color">Latest News Articles</h3>
            </div>
          </div>
        </div>
        <div className="row p-t-35">
          {allNews &&
            allNews.map((item) => (
              <div key={item.id} className="col-lg-4">
                <div className="last-added-news">
                  <div className="news-item pos-relative">
                    <Link
                      className="news-pic trans-03 shadow"
                      to={`/news/${item.id}`}
                    >
                      {item.categoryName.map((cat) => (
                        <span className="category">{cat}</span>
                       ))}  
                      <img src={item.photos[0]} alt={item.title} />
                    </Link>

                    <div className="p-t-15 news-title">
                      <span>
                        <a href="!#" className="name trans-03">
                          By, Sahra
                        </a>
                        <span className="f1-s-3 m-rl-3"> - </span>
                        <span className="f1-s-3"> {item.addedDate}</span>
                      </span>
                      <h5>
                        <a
                          href="blog-detail-1.html"
                          className="trans-03 news-title-a"
                        >
                          {item.title}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
