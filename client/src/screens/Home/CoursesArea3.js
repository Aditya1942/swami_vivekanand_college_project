import React, { useEffect, useState } from "react";
import CourseComponent from "../../Components/CourseComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import useLoader from "../../hooks/useLoader";
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 400,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
const CoursesArea3 = () => {
  const loader = useLoader();
  const [CoursesList, setCoursesList] = useState([]);

  useEffect(() => {
    loader.Show();
    const source = axios.CancelToken.source();
    axios({
      url: "/courses",
      method: "get",
      dataType: "json",
      cancelToken: source.token,
    }).then((data) => {
      if (data?.data) {
        setCoursesList(data.data);
      } else {
        setCoursesList([]);
      }
      console.log(data.data);
      loader.Hide();
    });
    return () => {
      source.cancel("hey yo! going too fast. take it easy");
    };
  }, []);
  return (
    <div className="courses-area section-padding40 fix pb-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Our featured courses</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {/* <div className="courses-actives"> */}
          {/* Course */}
          {CoursesList.length &&
            CoursesList.map((course, index) => (
              <CourseComponent
                key={course._id}
                title={course.title}
                img={course.img}
                subCourse={course.subCourse}
              />
            ))}
          {/* Course */}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesArea3;
