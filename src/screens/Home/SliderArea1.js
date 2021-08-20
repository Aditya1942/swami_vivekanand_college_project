import React from "react";

const SliderArea1 = () => {
  return (
    <div>
      {/*? slider Area Start*/}
      <section className="slider-area ">
        <div className="slider-active">
          {/* Single Slider */}
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInLeft" data-delay="0.2s">
                      SHREE SWAMI VIVEKANAND COLLEGE
                      {/* - SURENDRANAGAR */}
                      <small></small>
                    </h1>

                    <p data-animation="fadeInLeft" data-delay="0.4s">
                      {"   (Affilated to Saurashtra University)"}
                    </p>

                    <a
                      data-animation="fadeInLeft"
                      data-delay="0.7s"
                      href="https://forms.gle/gKgDhwZ6N8Gnthac6"
                      target="_blank"
                      rel="noreferrer"
                      className="btn hero-btn"
                    >
                      <i class="fa fa-check-square-o" aria-hidden="true"></i>
                      Admission Open{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ? services-area */}
    </div>
  );
};

export default SliderArea1;
