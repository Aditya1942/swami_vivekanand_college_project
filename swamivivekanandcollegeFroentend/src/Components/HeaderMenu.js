import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

const HeaderMenu = () => {
  let { path, url } = useRouteMatch();

  return (
    <header>
      {/* Header Start */}
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/logo.jpg" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to={`/courses`}>Courses</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/NCC">{"NCC & NSS"}</Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/ncc">NCC</Link>
                              </li>
                              <li>
                                <Link to="/nss">NSS</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/academic">Academic</Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/syllabus">Syllabus</Link>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href="http://qp.saurashtrauniversity.edu/Index.aspx"
                                >
                                  Old Question Papers
                                </a>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href="https://result.saurashtrauniversity.edu/Default1.aspx"
                                >
                                  Result
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          {/* Button */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
};

export default HeaderMenu;
