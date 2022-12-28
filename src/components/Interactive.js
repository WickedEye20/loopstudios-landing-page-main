import React, { useEffect, useState } from "react";
import interactiveImg from "../assets/desktop/image-interactive.jpg";
import interactiveImgMobile from "../assets/mobile/image-interactive.jpg";
import getWindowSize from "../windowSize";

export default function Interactive() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    setWindowSize(getWindowSize());

    return () => {};
  }, []);

  return (
    <section className="interactiveSection">
      <div className="interactive_main flex__class">
        <img
          src={
            windowSize.innerWidth <= parseInt(576)
              ? interactiveImgMobile
              : interactiveImg
          }
          alt="Interactive"
        />
        <div className="interactive_content">
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
