import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { GalleryData } from "../Database";
function openImage(base64URL) {
  var win = window.open();
  win.document
    .write(`<iframe src=" ${base64URL}" frameborder="0" style="border:0; 
 top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen> 
 </iframe>`);
}
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
                          <span
                            // href={imgurl}
                            onClick={() => openImage(imgurl)}
                          >
                            <div
                              className="single-gallery-image"
                              style={{
                                background: `url(${imgurl})`,
                              }}
                            />
                          </span>
                        </span>
                        <div className="typography mt-3">
                          <h5>{image.title}</h5>
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
