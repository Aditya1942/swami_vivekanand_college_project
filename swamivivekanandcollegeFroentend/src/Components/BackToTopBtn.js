import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const BackToTopBtn = () => {
  let { url } = useRouteMatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
   
    console.log("url");
    let timer = setTimeout(() => {
      
      scrollToTop()
    }, 100);
return () => clearTimeout(timer);
  }, [url]);

  return (
    <div id="back-top">
      <span title="Go to Top" onClick={scrollToTop}>
        <i className="fas fa-level-up-alt" />
      </span>
    </div>
  );
};

export default BackToTopBtn;
