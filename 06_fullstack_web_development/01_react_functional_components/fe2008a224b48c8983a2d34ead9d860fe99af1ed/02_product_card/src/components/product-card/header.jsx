import React from "react";
import zelda from "../../../data/zelda.js";

const CardHeader = (props) => {
  console.log(props.platformLogos[0]);
  return (
    <>
      <h1>{props.name}</h1>
      <img src={zelda.platforms[0].platform_logo.url} />
    </>
  );
};

export default CardHeader;
