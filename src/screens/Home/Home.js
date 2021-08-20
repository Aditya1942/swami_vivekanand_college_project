import React from "react";
import CoursesArea3 from "./CoursesArea3";
import ServicesArea2 from "./ServicesArea2";
import SliderArea1 from "./SliderArea1";
import AboutArea4 from "./AboutArea4";

const Home = () => {
  return (
    <main>
      {/*? slider Area Start*/}
      <SliderArea1 />
      {/* ? services-area */}
      <ServicesArea2 />
      {/* Courses area start */}
      <CoursesArea3 />
      {/* Courses area End */}
      {/*? About Area-3 Start */}
      <AboutArea4 />
      {/* About Area End */}
    </main>
  );
};

export default Home;
