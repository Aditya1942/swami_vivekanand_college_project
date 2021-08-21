import React from "react";
import Header from "../Components/Header";
import { GalleryData } from "../Database";

const Gallery = () => {
  return (
    <div className="gallery">
      <Header
        title="Gallery"
        Breadcrumb={["Gallery"]}
        BreadcrumbLink={["/gallery"]}
      />
      <div className="container">
        {GalleryData.map((item) => (
          <div className="row" key={item.id}>
            <div className="col-md-12">
              <div className="section-top-border">
                <h3>{item.title}</h3>
                <div className="row gallery-item">
                  {item.images.map((image) => {
                    let imgurl =
                      process.env.PUBLIC_URL +
                      "/img/" +
                      item.folderPath +
                      "/" +
                      image.img;
                    return (
                      <div className={image.isBig ? "col-md-6" : "col-md-4"}>
                        <span className="img-pop-up">
                          <div
                            className="single-gallery-image"
                            style={{
                              background: `url(${imgurl})`,
                            }}
                          />
                        </span>
                        <div className="typography mt-3">
                          <h2>{image.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
