import HeaderMenu from "./Components/HeaderMenu";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

const Approuter = ({ children }) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 300);
  }, []);
  return (
    <>
      <HeaderMenu />
      <Loader open={open} />
      {children}
      <Footer />
      <BackToTopBtn />
    </>
  );
};
export default Approuter;
