import React from 'react'
import Auth from '../../component/auth/Auth';
import Category from '../../component/category/Category';
import "./style.css";

const Header = () => {
    return (
        <>
          <header>
        <section id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="!#">
                    <img className="logo-light" src="assets/img/logo-light.png" alt=""/>
                    <img className="logo-black" src="assets/img/logo.png" alt=""/>
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                       <Category/>
                    </ul>
                    <div className="nav-icons">
                        <ul>
                            <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
                                <a className="nav-link dropdown-toggle" href="!#" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="far fa-bell"></i>
                                    <span className="badge badge-info badge-counter">6</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow-sm">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="feather-download-cloud text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2020</div>
                                            <span className="font-weight-bold">A new monthly report is ready to
                                                download!</span>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="feather-edit text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2020</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="feather-folder text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2020</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="!#">Show All
                                        Alerts</a>
                                </div>
                            </li>
                        <Auth/>
                        </ul>

                    </div>
                    <div className="top-search">
                        <div className="input-group">
                            <form action="#">
                                <input type="text" name="text" className="form-control" placeholder="Search"/>
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </header>  
        </>
    )
}

export default Header


