import React, { useState } from "react";

const Tweeter = () => {
  const [charCount, setCharCount] = useState("");
  let charStyle;

  if (charCount.length < 100) {
    charStyle = "green";
  } else if (charCount.length >= 100 && charCount.length < 150) {
    charStyle = "yellow";
  } else {
    charStyle = "red";
  }

  return (
    <div>
      <h1> Twitter Counter </h1>
      <textarea
        style={{ width: "300px", height: "100px" }}
        value={charCount}
        onChange={(e) => {
          setCharCount(e.target.value);
        }}
      />
      <h2>
        <span style={{ color: charStyle }}>{charCount.length}</span>/150
      </h2>
      <h3> {charCount.length > 150 ? "Limit Exceed" : ""} </h3>
    </div>
  );
};

export default Tweeter;
