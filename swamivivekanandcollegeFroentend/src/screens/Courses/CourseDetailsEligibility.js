import React from "react";
import "./css/style.css";
const CourseDetailsEligibility = ({ description }) => {
  return (
    <div
      style={{ paddingTop: "0px", paddingBottom: "30px" }}
      className="section-top-border"
    >
      <h2 className="mb-30">Eligibility</h2>
      <div className="row">
        <div className="col-lg-12">
          <blockquote
            className="generic-blockquote"
            style={{ fontSize: "16px" }}
          >
            {description}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsEligibility;
