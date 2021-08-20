import React from "react";

const Header = () => {
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
                    <a href="index.html">
                      <img src="assets/img/logo/logo.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li className="active">
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="courses.html">Courses</a>
                          </li>
                          <li>
                            <a href="about.html">Gallery</a>
                          </li>
                          <li>
                            <a href="#">{"NCC & NSS"}</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">NCC</a>
                              </li>
                              <li>
                                <a href="blog_details.html">NSS</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="academic">Academic</a>
                            <ul className="submenu">
                              <li>
                                <a href="syllabus">Syllabus</a>
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
                          </li>{" "}
                          <li>
                            <a href="about">About</a>
                          </li>
                          <li>
                            <a href="contact">Contact</a>
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

export default Header;
