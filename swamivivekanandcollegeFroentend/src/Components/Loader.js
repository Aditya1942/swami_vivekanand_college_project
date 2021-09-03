import React from "react";

const Loader = ({ open }) => {
  return open ? (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle" />
          <div className="preloader-img pere-text">
            <img src="assets/img/logo/loder.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Loader;
