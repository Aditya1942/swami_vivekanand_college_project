import React from "react";

const CourseDetailsFutureScope = ({ futureScope }) => {
  console.log(futureScope);
  return (
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
              <li className="sample-text ">{item}</li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CourseDetailsFutureScope;
