//import React from "react";
import React, { useState } from "react";

export const HideOrNotHide = () => {
  // Code here
  const [count, setCount] = useState(0);
  if (count % 2 === 0) {
    return (
      <div>
        <p>Super Premier exo sur React</p>
        <button onClick={() => setCount(count + 1)}>Hide content</button>
      </div>
    );
  }
  if (count % 2 !== 0) {
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Reveal content</button>
      </div>
    );
  }
};
