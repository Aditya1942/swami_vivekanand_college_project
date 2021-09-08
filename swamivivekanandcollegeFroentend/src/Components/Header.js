import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, Breadcrumb, BreadcrumbLink }) => {
  return (
    <section className="slider-area slider-area2">
      <div className="slider-active">
        {/* Single Slider */}
        <div className="single-slider slider-height2">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-11 col-md-12">
                <div className="hero__caption hero__caption2">
                  <h1 data-animation="bounceIn" data-delay="0.2s">
                    {title}
                  </h1>
                  {/* breadcrumb Start*/}
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      {Breadcrumb.map((item, index) => (
                        <li className="breadcrumb-item" key={index}>
                          <Link to={BreadcrumbLink[index]}>{item}</Link>
                        </li>
                      ))}
                    </ol>
                  </nav>
                  {/* breadcrumb End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
