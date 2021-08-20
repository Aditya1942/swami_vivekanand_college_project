import React from "react";

const CourseDetailsEligibility = ({ description }) => {
  return (
    <div
      style={{ paddingTop: "0px", paddingBottom: "30px" }}
      className="section-top-border"
    >
      <h1 className="mb-30">Eligibility</h1>
      <div className="row">
        <div className="col-lg-12">
          <blockquote className="generic-blockquote">{description}</blockquote>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsEligibility;
