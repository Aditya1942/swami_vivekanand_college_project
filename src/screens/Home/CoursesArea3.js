import React from "react";
import CourseComponent from "../../Components/CourseComponent";
import { Courses } from "../../Database";

const CoursesArea3 = () => {
  return (
    <div className="courses-area section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Our featured courses</h2>
            </div>
          </div>
        </div>
        <div className="courses-actives">
          {/* Course */}
          {Courses.map((course, index) => (
            <CourseComponent
              key={course.id}
              title={course.title}
              img={course.img}
              subCourse={course.subCourse}
            />
          ))}
          {/* Course */}
        </div>
      </div>
    </div>
  );
};

export default CoursesArea3;
