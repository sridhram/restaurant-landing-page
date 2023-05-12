import React from "react";

import "./SpecialMenu.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants/index";
import MenuItem from "../../components/Menuitem/MenuItem";

const SpecialMenu = () => (
  <article className="app__menu--container" id="menu">
    <SubHeading text="Menu That Fits Your Palatte" />
    <h1 className="app__menu--heading">Today's special</h1>
    <section className="app__menu--menu-section">
      <div>
        <h2>Wine & Beer</h2>
        <ul>
          {data.wines.map((wineData) => {
            return (
              <MenuItem
                title={wineData.title}
                price={wineData.price}
                tags={wineData.tags}
              />
            );
          })}
        </ul>
      </div>
      <figure>
        <img src={images.menu} alt="menu" />
      </figure>
      <div>
        <h2>Cocktails</h2>
        <ul>
          {data.cocktails.map((wineData) => {
            return (
              <MenuItem
                title={wineData.title}
                price={wineData.price}
                tags={wineData.tags}
              />
            );
          })}
        </ul>
      </div>
    </section>
    <button className="app__menu--btn">Know More</button>
  </article>
);

export default SpecialMenu;
