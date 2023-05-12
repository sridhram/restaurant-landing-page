import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";
import { meal } from "../../constants";
import { useState, useRef } from "react";

const Intro = () => {
  const [videoState, setvideoState] = useState(false);
  const videoRef = useRef();
  const overlayRef = useRef();
  return (
    <article className="app__intro--main-container">
      <video
        onMouseEnter={() => overlayRef.current.classList.remove("hide")}
        className="app__intro--video"
        loop
        muted
        controls={false}
        type="video/mp4"
        src={meal}
        ref={videoRef}
      />
      <section
        ref={overlayRef}
        className="app__intro--overlay hide"
        onMouseLeave={() => overlayRef.current.classList.add("hide")}
      >
        <div
          className="app__intro--icon-container"
          onClick={() => {
            setvideoState(!videoState);
            videoState ? videoRef.current.pause() : videoRef.current.play();
          }}
        >
          {!videoState ? (
            <BsFillPlayFill color="#fff" fontSize={30} />
          ) : (
            <BsPauseFill color="#fff" fontSize={30} />
          )}
        </div>
      </section>
    </article>
  );
};

export default Intro;
