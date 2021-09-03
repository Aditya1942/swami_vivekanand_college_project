import React from "react";
import { CoCurricularActivitiesData } from "../../Database";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoCurricularActivities4 = () => {
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
  return (
    <div className="courses-area section-padding40 fix pt-1 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Co-Curricular Activities</h2>
              <h4>
                {` (Tour,Annual Function,Picnic,Day Celebration,Student Development
                Programme,Saurashtra Premiere Leauge Cricket Tournament,Sports
                Activity)`}
              </h4>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {/* <div className="courses-actives"> */}
          {/* Course */}
          {CoCurricularActivitiesData.map((course, index) => (
            <IMAGE key={course.id} img={course.img} />
          ))}
          {/* Course */}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};
const IMAGE = ({ img }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/CoCurricularActivities/${img}`;
  return (
    <div className="properties pb-10">
      <div className="properties__card">
        <div className="properties__img overlay1">
          <b>
            <img
              className="single-gallery-image"
              height={220}
              src={imgUrl}
              alt=""
            />
          </b>
        </div>
      </div>
    </div>
  );
};

export default CoCurricularActivities4;
