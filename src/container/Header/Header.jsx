import React from "react";

import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants/index";

const Header = () => (
  <main className="app__home" id="home">
    <section>
      <SubHeading text="Chase the new Flavour" />
      <h1 className="app__home--heading">Food that surprises you</h1>
      <p className="app__home--desc">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button className="app__home--btn">Explore Menu</button>
    </section>
    <section>
      <img src={images.welcome} />
    </section>
  </main>
);

export default Header;
