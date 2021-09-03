import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrappper footer-bg">
        {/* Footer Start*/}
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-5 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    {/* logo */}
                    <div className="footer-logo mb-25">
                      <a href="index.html">
                        <img
                          src={process.env.PUBLIC_URL + "/img/logo_footer.jpg"}
                          alt=""
                        />
                        <span>
                          SHREE SWAMI VIVEKANAND COLLEGE- SURENDRANAGAR
                        </span>
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          <span class="fa fa-map-marker mr-2"></span> Opp. I. T.
                          I. , Nr S. T. Stand, Surendranagar-363001, Gujarat
                        </p>
                      </div>
                    </div>
                    {/* social */}
                    <div className="footer-social">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Email </h4>
                    <ul>
                      <li>
                        <p>
                          <span class="fa fa-envelope-open mr-2"></span>
                          sv.college@yahoo.in
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact no </h4>
                    <ul>
                      <li>
                        <p>
                          <span class="fa fa-phone mr-2"></span>+91 02752 23 33
                          11.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer-bottom area */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex align-items-center">
                <div className="col-xl-12 ">
                  <div className="footer-copy-right text-center">
                    <p>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      © {new Date().getFullYear()} SHREE SWAMI VIVEKANAND
                      COLLEGE- SURENDRANAGAR. All rights reserved
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End*/}
      </div>
    </footer>
  );
};

export default Footer;
