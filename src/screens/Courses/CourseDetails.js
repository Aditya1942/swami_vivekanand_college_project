import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import { CourseDetailData } from "../../Database";
import CourseDetailHeader from "./CourseDetailHeader";
import CourseDetailsAfter from "./CourseDetailsAfter";

import CourseDetailsEligibility from "./CourseDetailsEligibility";
import CourseDetailsFutureScope from "./CourseDetailsFutureScope";
import CourseSubjects from "./CourseSubjects";

const CourseDetails = () => {
  const { courseName } = useParams();
  let history = useHistory();

  const [CourseData, setCourseData] = useState({});
  useEffect(() => {
    console.log(courseName, history);
    let data = CourseDetailData.find((e) => {
      return e.name === courseName;
    });
    setCourseData(data);
    console.log(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main>
      <Header
        title={CourseData?.maniTitle}
        Breadcrumb={["Courses", CourseData?.maniTitle]}
        BreadcrumbLink={["/courses", courseName]}
      />
      <div class="whole-wrap">
        <div class="container box_1170">
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
