import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import useLoader from "../../hooks/useLoader";

const NccGallery = ({ title, img }) => {
  let imgUrl = `${process.env.PUBLIC_URL}/img/nss/${img}`;
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
        <h5>{title}</h5>
      </div>
    </div>
  );
};

const Nss = () => {
  const [NssGaleryData, setNssGaleryData] = useState([]);
  const loader = useLoader();
  useEffect(() => {
    loader.Show()
    const source = axios.CancelToken.source();
    axios({
      url: "/nss  ",
      method: "get",
      dataType: "json",
      cancelToken: source.token,
    }).then((data) => {
      setNssGaleryData(data.data);
      console.log(data.data);
      loader.Hide()

    });
    return () => {
      source.cancel("hey yo! going too fast. take it easy");
    };
  }, []);
  return (
    <div>
      <Header title="NSS" Breadcrumb={["NSS"]} BreadcrumbLink={["/nss"]} />
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
                {"National Service Scheme (NSS)"}
              </h1>

              <div className="blog_details">
                <p className="excert">
                  {`National Service Scheme is often defined as the third
                  dimension of Indian Higher education System. It is after all a
                  student community with the objective of personality
                  development. It is always misunderstood as a platform for
                  social service. Yes it is. but the primary aim is personality
                  development of students. For that the method adopted is social
                  service. Or we can say NSS is focused on personality
                  development through social service.. The concept of National
                  Service Scheme is started in the year 1969 to build sense of
                  social responsibility through teacher and students involvement
                  in constructive service with the motto of “Not Me But You”.
                  NSS volunteers work in rural areas, adopted villages and
                  school to the serving the cause of society through survey,
                  education and health awareness programme. This study involves
                  in identifying the importance, aims and objectives of NSS in
                  higher education which in turn create social responsibility
                  among the students. This paper also highlights the constraints
                  faced by the NSS, and students in the system and also suggests
                  measure to overcome in order to utilise future generation in
                  positive direction. Keywords: Social Responsibility,
                  Awareness, Objectives, Constraints & Generation`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-top-border">
          <h3>Our College's Activity in NSS</h3>
          <div className="row gallery-item">
            {NssGaleryData?.map((item, index) => (
              <NccGallery key={item._id} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nss;
