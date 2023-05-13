import React from "react";
import { images } from "../../constants/index";
import "./FindUs.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const FindUs = () => (
  <article className="app__find--main-container" id="contact">
    <section>
      <SubHeading text="Contact" />
      <h1 className="app__find--heading">Find Us</h1>
      <p className="app__find--desc">
        Lane Ends Bungalow, Whatcroft Hall Lane, Berlin
      </p>
      <h3 className="app__find--sub-heading">Opening Hours</h3>
      <p className="app__find--timing">Mon - Fri: 10:00 am to 12:00 am</p>
      <p className="app__find--timing">Mon - Fri: 10:00 am to 02:00 am</p>
      <button className="app__home--btn">Visit Us</button>
    </section>
    <section>
      <img src={images.findus} />
    </section>
  </article>
);

export default FindUs;
