import React from "react";
import "./css/style.css";

const CourseSubjects = ({ subjects = [], semesters = [] }) => {
  return (
    <div
      className="section-top-border"
      style={{ paddingTop: "30px", paddingBottom: "10px" }}
    >
      <h2 className="mb-30">Subjects</h2>
      {subjects.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {subjects.map((subject, index) => (
              <span
                key={"sub"+index}
                className="genric-btn primary-border circle arrow"
              >
                {subject.toUpperCase()}
                <span className="lnr lnr-arrow-right" />
              </span>
            ))}
          </div>
        </div>
      ) : (
        semesters.length > 0 && (
          <div className="row">
            {semesters.map((semester, index) => (
              <div key={"sem"+index} className="col-md-4 pb-30">
                <div className="single-defination">
                  <h2 className="mb-20">{semester.title}</h2>
                  <ul className="unordered-list">
                    {semester.subjects.map((subject, index) => (
                      <li  key={"semsub"+index}  style={{ lineHeight: "25px", marginBottom: "0px" }}>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default CourseSubjects;
