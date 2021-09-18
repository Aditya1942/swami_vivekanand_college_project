import React from "react";
import { Link } from "react-router-dom";

const AcademicComponent = ({ title, img, link, ExternalLink }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/${img}`;
  return (
    <div className="properties pb-20">
      <div className="properties__card">
        <div className="properties__img overlay1">
          {ExternalLink ? (
            <a href={link} rel="noreferrer" target="_blank">
              <img height={220} src={imgUrl} alt="" />
            </a>
          ) : (
            <Link to={link}>
              <img height={220} src={imgUrl} alt="" />
            </Link>
          )}
        </div>
        <div className="properties__caption">
          {ExternalLink ? (
            <a href={link} rel="noreferrer" target="_blank">
              <p>{title}</p>
            </a>
          ) : (
            <Link to={link}>
              <p>{title}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicComponent;
