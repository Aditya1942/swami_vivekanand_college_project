import React, { useEffect, useState } from "react";
import CourseComponent from "../../Components/CourseComponent";
import Header from "../../Components/Header";
import axios from "axios";
import { CourseDetailData } from "../../Database";
import "./css/style.css";

const Courses = () => {
  const [CoursesList, setCoursesList] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios({
      url: "/courses",
      method: "get",
      dataType: "json",
      cancelToken: source.token,
    }).then((data) => {
      setCoursesList(data.data);
      console.log(data.data);
    });
    console.log(CourseDetailData);
    return () => {
      source.cancel("hey yo! going too fast. take it easy");
    };
  }, []);
  return (
    <main>
      <Header
        title="Our Courses"
        Breadcrumb={["Courses"]}
        BreadcrumbLink={["/courses"]}
      />
      <div>
        {/* Courses area start */}
        <div className="courses-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Courses We Offer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {CoursesList?.map((course, index) => (
                <div className="col-lg-4" key={course._id}>
                  <CourseComponent
                    title={course.title}
                    img={course.img}
                    subCourse={course.subCourse}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Courses area End */}
      </div>
    </main>
  );
};

export default Courses;
