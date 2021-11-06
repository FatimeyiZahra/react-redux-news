import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNewsDetails } from "../redux/actions/NewsAction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Edit1 = () => {
    const [checked, setChecked] = useState(true);
    const [editNews, setEditNews] = useState({})

    const { id } = useParams()

    const onInputChange = (event) => {
        setEditNews({ ...editNews, [event.target.name]: event.target.value });
    };

    const newsDetails = useSelector(state => state.NewsReducer.newsDetails)
    console.log(editNews)
    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setNewsDetails(id));
        // setEditNews(newsDetails)
    }, [id]) 

    const titleRef = useRef();
    const textRef = useRef();

    const Edit = (e) => {
        e.preventDefault();
    };
    // if(editNews){
    //     console.log(editNews.title)
    // }

    return (
        <>
            <div className="col-lg-8 padding-top">

                <form onSubmit={Edit}>
                    {editNews && (
                        <>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={onInputChange}
                                    value={editNews.title}
                                    name="title"
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
                                    value={newsDetails.text}
                                    ref={textRef}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">categories</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={onInputChange}
                                    name="title"
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)}
                                />
                            </div>
                        </>
                    )}

                    <button className="btn btn-primary" type="submit">
                        save
                    </button>

                    <Link to={`/newsList`}>
                        <p className="btn btn-primary">cancel</p>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Edit1;
