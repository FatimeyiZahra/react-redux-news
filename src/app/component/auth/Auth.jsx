import React from "react";

const Auth = () => {
  return (
    <>
      <li className="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
        <a
          className="nav-link dropdown-toggle pr-0"
          href="!#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="img-profile rounded-circle"
            alt=""
            src="assets/img/p13.png"
          />
        </a>

        <div className="dropdown-menu dropdown-menu-right shadow-sm">
          <div className="p-3 d-flex align-items-center">
            <div className="dropdown-list-image mr-3">
              <img
                className="rounded-circle"
                src="assets/img/user.png"
                alt=""
              />
              <div className="status-indicator bg-success"></div>
            </div>
            <div className="user-profile">
              <div className="text-truncate">Shardiova Sahara</div>
              <div className="small text-gray-500">Web/Dev.</div>
            </div>
          </div>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="favorite.html">
            <i className="far fa-heart"></i>
            Favorite
          </a>
          <a className="dropdown-item" href="account.html">
            <i className="far fa-edit"></i> Edit
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="sign-in.html">
            <i className="fas fa-sign-out-alt"></i>Logout
          </a>
        </div>
      </li>
    </>
  );
};

export default Auth;
