import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import fNum from "./NumberFormat";
function numberWithComma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function colorScaling(props) {
  return (
    <p>
      <FontAwesomeIcon icon={faCircle} color={props.color} />
      <span> </span> {fNum(Math.ceil(props.range[0]))} -{" "}
      {fNum(Math.ceil(props.range[1]))}
    </p>
  );
}
export default colorScaling;
