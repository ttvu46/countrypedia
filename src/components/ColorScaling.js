import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function colorScaling(props) {
  return (
    <p>
      <FontAwesomeIcon icon={faCircle} color={props.color} />
      <span> </span> {Math.ceil(props.range[0])} - {Math.ceil(props.range[1])}
    </p>
  );
}
export default colorScaling;
