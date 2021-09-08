import React from "react";
import { Link } from "react-router-dom";

const CourseComponent = ({ title, img, subCourse }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/courses/${img}`;
  return (
    <div className="properties pb-20">
      <div className="properties__card">
        <div className="properties__img overlay1">
          <b>
            <img height={220} src={imgUrl} alt="" />
          </b>
        </div>
        <div className="properties__caption">
          <p>{title}</p>
          {subCourse.map((item, index) => (
            <h3 key={item._id} className="mt-2">
              <Link
                to={{
                  pathname: `/courses/${item._id}`,
                }}
              >
                {item.title}
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
