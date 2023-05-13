import { React, useRef, useEffect } from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants/index";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef();
  const imgRef = useRef();
  let imageRef = 0;
  const callScroll = () => {
    if (imageRef === 4) {
      imageRef = 0;
      scrollRef.current.scrollLeft = 0;
    } else {
      scrollRef.current.scrollLeft += imgRef.current.offsetWidth;
      imageRef++;
    }
  };

  useEffect(() => setInterval(() => callScroll(), 2000), []);
  return (
    <article className="app__article--main-container">
      <section>
        <SubHeading text="Instagram" />
        <h1 className="app__article--heading">Photo Gallery</h1>
        <p className="app__article--desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="app__article--btn">View More</button>
      </section>
      <section ref={scrollRef} className="app__article--img-carousel">
        <figure ref={imgRef} className="app__article--img-container">
          <img className="app__article--img" src={images.gallery01} />
        </figure>
        <figure className="app__article--img-container">
          <img className="app__article--img" src={images.gallery02} />
        </figure>
        <figure className="app__article--img-container">
          <img className="app__article--img" src={images.gallery03} />
        </figure>
        <figure className="app__article--img-container">
          <img className="app__article--img" src={images.gallery04} />
        </figure>
      </section>
    </article>
  );
};

export default Gallery;
