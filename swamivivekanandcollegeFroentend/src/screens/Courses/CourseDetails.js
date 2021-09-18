import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import useLoader from "../../hooks/useLoader";
import CourseDetailHeader from "./CourseDetailHeader";
import CourseDetailsAfter from "./CourseDetailsAfter";

import CourseDetailsEligibility from "./CourseDetailsEligibility";
import CourseDetailsFutureScope from "./CourseDetailsFutureScope";
import CourseSubjects from "./CourseSubjects";
import "./css/style.css";

const CourseDetails = () => {
  const { courseName } = useParams();
  const loader = useLoader();

  const [CourseData, setCourseData] = useState({});
  useEffect(() => {
    loader.Show()
    const source = axios.CancelToken.source();
    axios({
      url: "/courses/details/" + courseName,
      method: "get",
      dataType: "json",
      cancelToken: source.token,
    }).then((data) => {
      setCourseData(data.data);
      console.log(data.data);
      loader.Hide()
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      source.cancel("hey yo! going too fast. take it easy");
    };
  }, []);
  return (
    <main>
      <Header
        title={CourseData?.maniTitle}
        Breadcrumb={["Courses", CourseData?.maniTitle]}
        BreadcrumbLink={["/courses", courseName]}
      />
      <div className="whole-wrap">
        <div className="container box_1170">
          <CourseDetailHeader
            title={CourseData?.title}
            description={CourseData?.description}
          />
          <CourseDetailsEligibility description={CourseData?.eligibility} />
          <CourseSubjects
            subjects={CourseData?.subjects?.subjects}
            semesters={CourseData?.subjects?.semester}
          />
          <CourseDetailsFutureScope
            courseDuration={CourseData?.courseDuration}
            futureScope={CourseData?.futureScope}
          />
          <CourseDetailsAfter afterThisCourse={CourseData?.afterThisCourse} />
        </div>
      </div>
    </main>
  );
};

export default CourseDetails;
