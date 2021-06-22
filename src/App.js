import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Frame from "./components/iframe/Frame";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import './App.css';
function App() {
  const [pageName, setPageName] = useState("Home");

  const changePageName = (pageName) => setPageName(pageName);
 
  return (
    <>
    <div className='back'>

      <Header changePageName={changePageName} currentPage={pageName} />
      {pageName === "Home" && <Home />}
      {pageName === "About" && <About />}
      {pageName === "News" && <News />}
      {pageName === "Contact" && <Contact />}
      
    {/* <Frame /> */}
    </div>
      <Footer />
    </>
  );
}

export default App;