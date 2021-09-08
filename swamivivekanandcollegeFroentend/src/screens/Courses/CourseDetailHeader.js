import React from "react";
import "./css/style.css";

const CourseDetailHeader = ({ title, description }) => {
  return (
    <section
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
      className=" sample-text-area"
    >
      <div className="container box_1170">
        <h3 className="text-heading">{title}</h3>
        <p className="sample-text">{description}</p>
      </div>
    </section>
  );
};

export default CourseDetailHeader;
