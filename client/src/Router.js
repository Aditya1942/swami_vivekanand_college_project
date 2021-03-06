import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminRouter from "./Admin/AdminRouter";
import AlertMsg from "./Admin/components/AlertMsg";
import { ProvideAuth } from "./Admin/hooks/useAuth";
import Approuter from "./Approuter";
import Loader from "./Components/Loader";
import About from "./screens/About";
import Academic from "./screens/Academic/Academic";
import Syllabus from "./screens/Academic/Syllabus";
import Contact from "./screens/Contact";
import CourseDetails from "./screens/Courses/CourseDetails";
import Courses from "./screens/Courses/Courses";
import Gallery from "./screens/Gallery";
import Home from "./screens/Home/Home";
import Ncc from "./screens/Ncc&Nss/Ncc";
import Nss from "./screens/Ncc&Nss/Nss";

function Router() {
  return (
    <Switch>
      <Route exact path={`/`} component={Home}>
        <Approuter>
          <Home />
        </Approuter>
      </Route>
      <Route exact path={`/courses`}>
        <Approuter>
          <Courses />
        </Approuter>
      </Route>
      <Route path={`/courses/:courseName`}>
        <Approuter>
          <CourseDetails />
        </Approuter>
      </Route>
      <Route exact path={`/ncc`}>
        <Approuter>
          <Ncc />
        </Approuter>
      </Route>
      <Route exact path={`/nss`}>
        <Approuter>
          <Nss />
        </Approuter>
      </Route>
      <Route exact path={`/academic`}>
        <Approuter>
          <Academic />
        </Approuter>
      </Route>
      <Route exact path={`/syllabus`}>
        <Approuter>
          <Syllabus />
        </Approuter>
      </Route>
      <Route exact path={`/gallery`}>
        <Approuter>
          <Gallery />
        </Approuter>
      </Route>
      <Route exact path={`/about`}>
        <Approuter>
          <About />
        </Approuter>
      </Route>
      <Route exact path={`/contact`}>
        <Approuter>
          <Contact />
        </Approuter>
      </Route>

      <Route path="/admin">
        <ProvideAuth>
          <AlertMsg>
            <AdminRouter />
          </AlertMsg>
        </ProvideAuth>
      </Route>
    </Switch>
  );
}

export default Router;
