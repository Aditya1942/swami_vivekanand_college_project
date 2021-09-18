import React from "react";
import Header from "../Components/Header";

const About = () => {
  return (
    <div className="about">
      <Header
        title="About"
        Breadcrumb={["About"]}
        BreadcrumbLink={["/about"]}
      />
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">About Us</h3>
          <p className="sample-text">
            <ul className="unordered-list">
              <li>
                SHREE SWAMI VIVEKANAND COLLEGE is a self financed college
                established in 2007, commenced academic activities. The
                Institution is affiliated to Saurashtra University, Rajkot,
                Gujarat.India.
              </li>
              <li>
                SHREE SWAMI VIVEKANAND COLLEGE is Constituent College of
                Saurashtra University, Rajkot initiated by Shree Jay Bajrang
                Seva Samiti trust.
              </li>
              <li>
                NCC and NSS approved only one self finance college in
                SURENDRANAGAR District.
              </li>
              <li>
                The college is committed to provide opportunities and all other
                facilities that will help the students to grow physically
                strong, mentally sound and intellectually sharp.
              </li>
              <li>
                The Institute offers
                B.Sc(Chemistry,Physics,Microbiology,Mathematics),B.C.A.,BSc(IT),B.com,B.B.A.,B.A.,P.G.D.C.A.
                ,M.Sc(IT & CA),M.COM courses.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
