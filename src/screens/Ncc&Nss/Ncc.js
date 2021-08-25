import React from "react";
import Header from "../../Components/Header";
import { NccGaleryData } from "../../Database";

const NccGallery = ({ title, img }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/ncc/${img}`;
  return (
    <div className="col-md-4">
      <span className="img-pop-up">
        <a href={imgUrl} rel="noopener noreferrer" target="_blank">
          <div
            className="single-gallery-image"
            style={{ background: `url(${imgUrl})` }}
          />
        </a>
      </span>
      <div className="typography mt-3">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const Ncc = () => {
  return (
    <div>
      <Header title="NCC" Breadcrumb={["NCC"]} BreadcrumbLink={["/ncc"]} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="container box_1170 ">
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "60px",
                  marginBottom: "50px",
                  fontSize: "40px",
                }}
                class="text-heading "
              >
                {"National Cadets Corps(NCC)"}
              </h1>
              <div className="feature-img d-flex justify-content-center">
                <img className="img-fluid" src="/img/ncc/NCC_header.jpg" alt />
              </div>
              <div className="blog_details">
                <h2 style={{ color: "#2d2d2d" }}>National Cadets Corps(NCC)</h2>

                <p className="excert">
                  The NCC or National Cadet Corps is the Indian military cadet
                  corps with its Headquarters at New Delhi. It is open to school
                  and college students on voluntary basis. National Cadet Corps
                  is a Tri-Services Organization, comprising the Army, Navy and
                  Air Force, engaged in grooming the youth of the country into
                  disciplined and patriotic citizens. NCC changes cadets’ common
                  college life to an adventurous and thrilling journey of 3
                  years, teaching them to push limits at every turn of life and
                  to set priorities straight. The Cadets are given basic
                  military training in small arms and parades. The officers and
                  cadets have no liability for active military service once they
                  complete their course but are given preference over normal
                  candidates during selections based on the achievements in the
                  corps.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-top-border">
          <h3>Our College's Activity in NCC</h3>
          <div className="row gallery-item">
            {NccGaleryData.map((item, index) => (
              <NccGallery key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ncc;
