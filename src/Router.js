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
import Ncc from "./screens/Ncc&Nss/Ncc";
import Nss from "./screens/Ncc&Nss/Nss";
import Gallery from "./screens/Gallery";
import Academic from "./screens/Academic/Academic";
import Syllabus from "./screens/Academic/Syllabus";

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
          <Route exact path="/ncc" component={Ncc} />
          <Route exact path="/nss" component={Nss} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/academic" component={Academic} />
          <Route exact path="/syllabus" component={Syllabus} />
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
