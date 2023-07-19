import React, { Fragment } from "react";

const Record = ({ list, deleteFunction }) => {
  return (
    <Fragment>
      {list.map((R, idx) => (
        <div key={idx}>
          <div>
            <img src={R.emoji} alt="emoji" />
            <p>{R.text}</p>
          </div>
          <button onClick={(e) => deleteFunction(e, idx)}>Delete</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Record;
