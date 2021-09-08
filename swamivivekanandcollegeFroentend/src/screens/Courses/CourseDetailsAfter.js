import React from "react";
import "./css/style.css";

const CourseDetailsAfter = ({ afterThisCourse }) => {
  return (
    <section
      style={{ paddingTop: "0px", paddingBottom: "30px" }}
      className="sample-text-area"
    >
      <div
        className="container box_1170"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <h3 className="text-heading"> After This Course</h3>
        <p>{afterThisCourse}</p>
      </div>
    </section>
  );
};

export default CourseDetailsAfter;
