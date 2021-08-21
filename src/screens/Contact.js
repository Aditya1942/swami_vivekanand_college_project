import React from "react";
import Header from "../Components/Header";

const Contact = () => {
  return (
    <div className="about">
      <Header
        title="Contact"
        Breadcrumb={["Contact"]}
        BreadcrumbLink={["/contact"]}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-top-border">
              <h3 className="mb-30">Contact Us</h3>
              <div className="row">
                <div className="col-md-6 feature-img">
                  <img src="/img/college.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-md-6 mt-sm-20">
                  <div className="row">
                    <div className="col-12">
                      <img
                        src="/assets/img/logo/logo.jpg"
                        alt=""
                        className="img-fluid mr-5"
                      />
                      SHREE SWAMI VIVEKANAND COLLEGE
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div class="col-lg-12">
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-home"></i>
                        </span>
                        <div class="media-body">
                          <h3>Opp. I. T. I. , Nr S. T. Stand,</h3>
                          <p>Surendranagar-363001 Gujarat</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-tablet"></i>
                        </span>
                        <div class="media-body">
                          <h3>+91 8980556436</h3>
                          <p>+91 02752 23 33 11</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-email"></i>
                        </span>
                        <div class="media-body">
                          <h3>sv.college@yahoo.in</h3>
                          <p>Send us your query anytime!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
