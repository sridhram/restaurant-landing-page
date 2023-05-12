import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants/index";

import "./Laurels.css";

const Laurels = () => (
  <article id="awards" className="app__awards__main-container">
    <section className="app__awards__content-section">
      <SubHeading text="Awards & Recognition" />
      <h1>Our Laurels</h1>
      <section className="app__awards--awards-container">
        {data.awards.map((award) => {
          return (
            <div className="app__awards--award">
              <img src={award.imgUrl} />
              <div>
                <h3>{award.title}</h3>
                <p>{award.subtitle}</p>
              </div>
            </div>
          );
        })}
        ;
      </section>
    </section>
    <figure>
      <img className="app__awards__img-container" src={images.laurels} />
    </figure>
  </article>
);

export default Laurels;
