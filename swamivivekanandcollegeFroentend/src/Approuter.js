import HeaderMenu from "./Components/HeaderMenu";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
import "./App.css";
const Approuter = ({ children }) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 300);
  }, []);
  return (
    <div className="App">
      <HeaderMenu />
      <Loader open={open} />
      {children}
      <Footer />
      <BackToTopBtn />
    </div>
  );
};
export default Approuter;
