import React, { Fragment, useState } from "react";
import "./MainApp.css";
import logo from "../images/MSPLogo.svg";
import emoji1 from "../images/Emoji1.png";
import emoji2 from "../images/Emoji2.png";
import emoji3 from "../images/Emoji3.png";
import emoji4 from "../images/Emoji4.png";
import mainImage from "../images/mainImage.png";
import Record from "../Record/Record";
import Emotions from "../Emotions/Emotions";

const MainApp = () => {
  const images = [emoji1, emoji2, emoji3, emoji4];
  const [records, setRecords] = useState([]);

  const deleteHandler = (e, deletedIndex) => {
    setRecords(records.filter((obj, idx) => deletedIndex !== idx));
  };

  const recordData = () => {
    const text = document.getElementsByTagName("input")[0];
    const emoji = document.querySelector("input[type='radio']:checked");
    if (text.value && emoji) {
      setRecords([
        ...records,
        { text: text.value, emoji: images[emoji.value] },
      ]);

      // reset inputs
      text.value = "";
      emoji.checked = false;
    } else {
      alert("Please fill all data");
    }
  };

  return (
    <Fragment>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>Recording Feelings</h1>
      </header>

      <main>
        <section>
          <input
            type="text"
            name=""
            id=""
            placeholder="Write Your Feelings Here"
          />

          <div className="section">
            <div>
              <p>Select Emoji</p>
              <div className="emoji">
                <Emotions images={images} />
              </div>
            </div>
            <button onClick={recordData}>Record</button>
          </div>
        </section>

        <img src={mainImage} alt="mainImage" />

        <section>
          <Record list={records} deleteFunction={deleteHandler} />
        </section>
      </main>
    </Fragment>
  );
};

export default MainApp;
