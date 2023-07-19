import React, { Fragment } from "react";
import "./Emotions.css"

const Emotions = ({images}) => {
  return (
    <Fragment>
      {images.map((image, idx) => (
        <div key={idx}>
          <input type="radio" name="emotions" id={idx} value={idx} />
          <label htmlFor={idx}>
            <img src={image} alt="Emoji" />
          </label>
        </div>
      ))}
    </Fragment>
  );
};

export default Emotions;
