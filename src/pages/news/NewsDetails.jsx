import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setNewsDetails } from "../../redux/actions/NewsAction";

const NewsDetails = () => {
  const newsDetails = useSelector(
    (state) => state.NewsReducer.newsDetails
  );
  console.log(newsDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:44313/V1/News/news/${id}`)
      .then((res) => dispatch(setNewsDetails(res.data)));
  }, []);

  return (
    <section id="news-details">
      <div className="container">
        <div className="row justify-content-center">
          {newsDetails && (
            <div className="col-md-10 col-lg-8 p-b-30">
              <div className="details p-b-30">
                <h3 className="title">{newsDetails.title}</h3>
                <div className="added-by-date p-b-30">
                  <span className="cl8">
                    <a href="!!#" className="name trans-03">
                      By, Sahra
                    </a>
                    <span className="f1-s-3 m-rl-3"> - </span>
                    <span className="f1-s-3"> {newsDetails.addedDate}</span>
                  </span>
                </div>
                <div className="news-pic">
                  <span className="category">Sports</span>
                  <img src={newsDetails.photos[0]} alt="IMG" />
                </div>
                <p className="news-text">{newsDetails.text}</p>
              </div>
              <div className="share">
                <span>Share: </span>
                <ul className="social media">
                  <li className="facebook">
                    <a href="!#">
                      <i className="fab fa-facebook-f"></i>Facebook
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="!#">
                      <i className="fab fa-twitter"></i>Twitter
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="!#">
                      <i className="fab fa-google-plus-g"></i>Google+
                    </a>
                  </li>
                  <li className="pinterest">
                    <a href="!#">
                      <i className="fab fa-pinterest"></i>Pinterest
                    </a>
                  </li>
                </ul>
              </div>
              <div className="self-comment">
                <h4>5 Comments</h4>
                <div className="comment">
                  <div className="image">
                    <img src="assets/img/comment1.jpg" alt="" />
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Leave A Comments"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-row col-lg-12">
                        <button
                          className="cancel-button"
                          type="submit"
                          name="submit"
                          id="submit"
                        >
                          CANCEL
                        </button>
                        <button
                          className="post-button"
                          type="submit"
                          name="submit"
                          id="submit"
                        >
                          Post cOMMENT
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="blog-comments">
                <div className="comment-list">
                  <div className="comment">
                    <div className="image">
                      <img src="assets/img/comment1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="head">
                        <h5>Jonathom Doe</h5>
                        <span>28 Aug, 2020</span>
                      </div>
                      <p>
                        Delivered ye sportsmen zealously arranging frankness
                        estimable as. Nay any article enabled musical shyness
                        yet sixteen yet blushes. Entire its the did figure
                        wonder off.
                      </p>
                      <div className="reply">
                        <a href="!#">
                          <i className="fa fa-reply"></i>REPLY
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-reply">
                    <div className="image">
                      <img src="assets/img/comment2.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="head">
                        <h5>Spart Lee</h5>
                        <span>17 Feb, 2020</span>
                      </div>
                      <p>
                        Delivered ye sportsmen zealously arranging frankness
                        estimable as. Nay any article enabled musical shyness
                        yet sixteen yet blushes. Entire its the did figure
                        wonder off.
                      </p>
                      <div className="reply">
                        <a href="!#">
                          <i className="fa fa-reply"></i>REPLY
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                        Zhang social media pop also known when smart innocent...
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="news-image">
                      <img src="assets/img/technology-3.jpg" alt="Img" />
                    </div>
                    <div className="title">
                      <a href="!#" className="trans-03">
                        Venezuela elan govt and opposit the property collect...
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="news-image">
                      <img src="assets/img/post-10.jpg" alt="Img" />
                    </div>
                    <div className="title">
                      <a href="!#" className="trans-03">
                        Zhang social media pop also known when smart innocent...
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="news-image">
                      <img src="assets/img/economy-1.jpg" alt="Img" />
                    </div>
                    <div className="title">
                      <a href="!#" className="trans-03">
                        Venezuela elan govt and opposit the property collect...
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
  );
};

export default NewsDetails;
