import React, { useState, useEffect } from "react";
import getWindowSize from "../windowSize";

export default function Creation() {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };
  let images = importAll(
    require.context("../assets/desktop", false, /\.(png|jpe?g|svg|webp)$/)
  );

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    setWindowSize(getWindowSize());

    return () => {};
  }, []);

  if (windowSize.innerWidth <= parseInt(576)) {
    images = importAll(
      require.context("../assets/mobile", false, /\.(png|jpe?g|svg|webp)$/)
    );
  }

  return (
    <section className="creationSection">
      <h1>Our creations</h1>
      <button className="creation_btn">See all</button>
      <div className="creation_content_main">
        <div className="creation_content">
          <img src={images["image-curiosity.jpg"]} alt="" />
          <span>The<br />curiosity</span>
        </div>
        <div className="creation_content">
          <img src={images["image-deep-earth.jpg"]} alt="" />
          <span>Deep<br />earth</span>
        </div>
        <div className="creation_content">
          <img src={images["image-fisheye.jpg"]} alt="" />
          <span>Make it<br />fisheye</span>
        </div>
        <div className="creation_content">
          <img src={images["image-from-above.jpg"]} alt="" />
          <span>From up<br />above VR</span>
        </div>
        <div className="creation_content">
          <img src={images["image-grid.jpg"]} alt="" />
          <span>The<br />grid</span>
        </div>
        <div className="creation_content">
          <img src={images["image-night-arcade.jpg"]} alt="" />
          <span>Night<br />arcade</span>
        </div>
        <div className="creation_content">
          <img src={images["image-pocket-borealis.jpg"]} alt="" />
          <span>Pocket<br />borealis</span>
        </div>
        <div className="creation_content">
          <img src={images["image-soccer-team.jpg"]} alt="" />
          <span>Soccer<br />team VR</span>
        </div>
      </div>
    </section>
  );
}
