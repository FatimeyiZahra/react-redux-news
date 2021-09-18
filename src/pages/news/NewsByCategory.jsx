import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setNewsByCategoryId } from "../../redux/actions/NewsAction";

const NewsByCategory = () => {
  const newsByCategoryId = useSelector(
    (state) => state.NewsReducer.newsByCategoryId
  );

    // console.log(newsByCategoryId);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://localhost:44313/V1/News/category?categoryId=${id}`)
      .then((res) => dispatch(setNewsByCategoryId(res.data)));
  }, [id]);

  return (
    <main>
      <section id="news-by-category">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8">
              <div className="row">
                {newsByCategoryId &&
                  newsByCategoryId.map((item) => (
                    <div key={item.id} className="col-lg-6">
                      <div className="last-added-news">
                        <div className="news-item pos-relative">
                          <Link
                            className="news-pic trans-03 shadow"
                            to={`/news/${item.id}`}
                          >
                            <img src={item.photos[0]} alt="IMG" />
                          </Link>
                          <div className="p-t-15 news-title">
                            <span>
                              <a href="!#" className="name trans-03">
                                By, Sahra
                              </a>
                              <span className="f1-s-3 m-rl-3"> - </span>
                              <span className="f1-s-3"> 22 Jan, 2020</span>
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
              <div className="pagination">
                <a href="!#" className="flex-c-c page-item hov-btn1 trans-03">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a href="!#" className="page-item trans-03 page-active">
                  1
                </a>
                <a href="!#" className="page-item trans-03">
                  2
                </a>
                <a href="!#" className="page-item trans-03">
                  3
                </a>
                <a href="!#" className="page-item trans-03">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-10 col-lg-4">
              <div className="relative-news-banner">
                <div className="banner">
                  <a href="!#">
                    <img
                      className="max-w-full"
                      src="assets/img/banner-2.jpg"
                      alt="IMG"
                    />
                  </a>
                </div>
                <div className="most-shared">
                  <div className="head  m-r-10">
                    <h3 className="title">Most Shared News</h3>
                  </div>
                  <ul className="news">
                    <li>
                      <div className="news-image">
                        <img src="assets/img/economy-3.jpg" alt="Img" />
                      </div>
                      <div className="title">
                        <a href="!#" className="trans-03">
                          Zhang social media pop also known when smart
                          innocent...
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="news-image">
                        <img src="assets/img/technology-3.jpg" alt="Img" />
                      </div>
                      <div className="title">
                        <a href="!#" className="trans-03">
                          Venezuela elan govt and opposit the property
                          collect...
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="news-image">
                        <img src="assets/img/post-10.jpg" alt="Img" />
                      </div>
                      <div className="title">
                        <a href="!#" className="trans-03">
                          Zhang social media pop also known when smart
                          innocent...
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="news-image">
                        <img src="assets/img/economy-1.jpg" alt="Img" />
                      </div>
                      <div className="title">
                        <a href="!#" className="trans-03">
                          Venezuela elan govt and opposit the property
                          collect...
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="follow-us">
                  <div className="head  m-r-10">
                    <h3 className="title">Follow Us</h3>
                  </div>
                  <ul className="link">
                    <li className="facebook">
                      <a href="!#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="!#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a href="!#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li className="dribbble">
                      <a href="!#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li className="youtube">
                      <a href="!#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="!#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="banner2">
                  <a href="!#">
                    <img
                      className="max-w-full"
                      src="assets/img/banner-1.png"
                      alt="IMG"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsByCategory;
