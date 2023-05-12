import React from "react";
import { images } from "../../constants/index";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./Chef.css";

const Chef = () => (
  <article className="app__chef--main-container">
    <figure>
      <img className="app__chef--chef-img" src={images.chef} />
    </figure>
    <section>
      <SubHeading text="Chef's word" />
      <h1 className="app__chef--heading">What We Believe In</h1>
      <p className="app__chef--desc">
        <span className="app__chef--quote">
          <img src={images.quote} />
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
        .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <div className="app__chef--chef-name">
        <h3>Kevin Luo</h3>
        <p>Chef and Founder</p>
      </div>
      <figure>
        <img className="app__chef--sign-img" src={images.sign} />
      </figure>
    </section>
  </article>
);

export default Chef;
