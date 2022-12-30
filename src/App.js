import "./assets/css/style.css";
import "./assets/css/base.css";
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import Interactive from "./components/Interactive";
import Nav from "./components/Nav";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const scroll = document.querySelector("[data-scroll-container]");
    const loco = new LocomotiveScroll({
      el: scroll,
      smooth: true,
    });
  }, []);

  return (
    <>
      <main id="main-container" data-scroll-container>
        <Nav />
        <Interactive />
        <Creation />
        <Footer />
      </main>
    </>
  );
}

export default App;
