import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">World</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Politics</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Economy</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Business</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Sports</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Technology</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to="/category/" className="nav-link">Entertainment</Link>
      </li>
    </>
  );
};

export default Category;
