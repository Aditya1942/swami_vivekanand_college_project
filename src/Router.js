import HeaderMenu from "./Components/HeaderMenu";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Home from "./screens/Home/Home";
import { CoursesList } from "./Database";
import Courses from "./screens/Courses/Courses";
import { Route, Switch } from "react-router-dom";
import CourseDetails from "./screens/Courses/CourseDetails";

function Router() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 300);
    console.log(CoursesList);
  }, []);
  return (
    <div className="App">
      <div>
        {/* ? Preloader Start */}
        <Loader open={open} />
        {/* Preloader end */}
        <HeaderMenu />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route exact path="/courses" component={Courses} />
          <Route path="/courses/:courseName" component={CourseDetails} />
        </Switch>

        <Footer />
        {/* Scroll Up Start*/}
        <BackToTopBtn />
        {/* Scroll Up end */}
      </div>
    </div>
  );
}

export default Router;
