import React from "react";

import "./AboutUs.css";
import { images } from "../../constants/index";
import SubHeading from "../../components/SubHeading/SubHeading";

const AboutUs = () => (
  <article className="app__about-us--container" id="about">
    <figure className="app__about-us--overlay">
      <img src={images.G} alt="background overlay" />
    </figure>
    <section className="app__about-us--content">
      <div className="app__about-us--section">
        <SubHeading text="About Us" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="app__about-us--btn">Know more</button>
      </div>
      <figure>
        <img src={images.knife} alt="logo" />
      </figure>
      <div className="app__about-us--history">
        <SubHeading text="Our History" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="app__about-us--btn">Know more</button>
      </div>
    </section>
  </article>
);

export default AboutUs;
