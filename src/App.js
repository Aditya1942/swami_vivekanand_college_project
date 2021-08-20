import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import Home from "./screens/Home/Home";
import { Courses } from "./Database";
function App() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 300);
    console.log(Courses);
  }, []);
  return (
    <div className="App">
      <div>
        {/* ? Preloader Start */}
        <Loader open={open} />
        {/* Preloader end */}
        <Header />
        <Home />
        <Footer />
        {/* Scroll Up Start*/}
        <BackToTopBtn />
        {/* Scroll Up end */}
      </div>
    </div>
  );
}

export default App;
