import React from "react";
import AcademicComponent from "../../Components/AcademicComponent";
import Header from "../../Components/Header";

const Academic = () => {
  const AcademicData = [
    {
      id: 1,
      title: "Syllabus",
      img: "Syllabus.jpg",
      link: "/syllabus",
      ExternalLink: false,
    },
    {
      id: <i class="fas fa-signal-alt-2    "></i>,
      title: "Results",
      img: "results.jpg",
      ExternalLink: true,
      link: "http://result.saurashtrauniversity.edu/Default1.aspx",
    },
    {
      id: 3,
      title: "Old Question Paper",
      img: "qpaper.jpg",
      ExternalLink: true,
      link: "http://qp.saurashtrauniversity.edu/Index.aspx",
    },
  ];
  return (
    <div>
      <Header
        title="Academic"
        Breadcrumb={["Academic"]}
        BreadcrumbLink={["/academic"]}
      />
      <div className="courses-area section-padding40 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Academic</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {AcademicData.map((course) => (
              <div className="col-lg-4" key={course.id}>
                <AcademicComponent
                  title={course.title}
                  img={course.img}
                  link={course.link}
                  ExternalLink={course.ExternalLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
