import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <li className="app__menu-item--container">
    <div className="app__menu-item--price-container">
      <h3>{title}</h3>
      <hr />
      <p className="app__menu-item--price">{price}</p>
    </div>
    <p className="app__menu-item--tag">{tags}</p>
  </li>
);

export default MenuItem;
