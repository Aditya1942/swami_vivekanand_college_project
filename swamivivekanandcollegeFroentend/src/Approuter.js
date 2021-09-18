import HeaderMenu from "./Components/HeaderMenu";
import Footer from "./Components/Footer";
import BackToTopBtn from "./Components/BackToTopBtn";
import Loader from "./Components/Loader";
import React from "react";
import "./App.css";
export const AppContext = React.createContext({});

const Approuter = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  
  const Show = ()=>{
    setOpen(true)
  }
  const Hide = ()=>{
    setOpen(false)
  }
 
  return (
    <AppContext.Provider value={{Loader:{Show, Hide}}}>
    <div className="App">
      <Loader open={open}/>
      <HeaderMenu />
        {children}
      <Footer />
      <BackToTopBtn />
    </div>
    </AppContext.Provider>
  );
};
export default Approuter;
