import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

const CourseDetailsFutureScope = ({ futureScope, courseDuration }) => {
  console.log(futureScope);
  return (
    <div className="services-area" style={{ marginTop: "30px" }}>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-lg-7 col-md-12 col-sm-12 text-left">
            <section
              style={{ paddingTop: "0px", paddingBottom: "30px" }}
              className="sample-text-area"
            >
              <div
                className="container box_1170"
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <h3 className="text-heading">Future Scope</h3>
                <ul className="ordered-list">
                  {futureScope &&
                    futureScope.map((item, index) => (
                      <li key={index} className="sample-text">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          </div>
          {/* <div className="col-lg-3 col-md-5 col-sm-7 text-left"></div> */}
          <div className="col-lg-5 col-md-12 col-sm-12 text-left">
            <div className="single-services mb-30">
              <div className="features-icon">
                <img src="/assets/img/icon/icon3.svg" alt="" />
              </div>
              <div className="features-caption">
                <h3>Course Duration</h3>
                <p>{courseDuration}</p>
              </div>
            </div>
            <div className="single-services mb-30">
              <div className="features-icon">
                <img src="/assets/img/icon/icon1.svg" alt="" />
              </div>
              <div className="features-caption">
                <h3>Fees Structure</h3>
                <Link
                  to="/contact"
                  className="genric-btn info-border circle arrow"
                >
                  Contact Us For More Details
                  <span className="lnr lnr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsFutureScope;
