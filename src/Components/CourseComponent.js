import React from "react";

const CourseComponent = ({ title, img, subCourse }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/courses/${img}`;
  return (
    <div className="properties pb-20">
      <div className="properties__card">
        <div className="properties__img overlay1">
          <a href="#">
            <img height={220} src={imgUrl} alt="" />
          </a>
        </div>
        <div className="properties__caption">
          <p>{title}</p>
          {subCourse.map((item, index) => (
            <h3 key={item.id} className="mt-2">
              <a href="#">{item.title}</a>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;
