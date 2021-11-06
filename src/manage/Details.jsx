import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Details = () => {
    const [checked, setChecked] = useState(true);

    const [newssDetails, setNewsDetails] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://localhost:44313/V1/News/news/${id}`)
            .then((res) => setNewsDetails(res.data));
    }, [id]);

    const onInputChange = (event) => {
        setNewsDetails({ ...newssDetails, [event.target.name]: event.target.value });
    };

    const titleRef = useRef();
    const textRef = useRef();

    return (
        <div className="col-lg-8 padding-top">

            <form>
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
                        defaultValue={newssDetails.title}
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
                        defaultValue={newssDetails.text}
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
                <Link to={`/edit/${newssDetails.id}`}>
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        edit
                    </button>
                </Link>
                <Link to={`/newsList`}>
                    <p className="btn btn-primary">cancel</p>
                </Link>
            </form>
        </div>
    );
};

export default Details;


