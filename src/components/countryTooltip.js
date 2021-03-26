import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function countryTooltip(props) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{props.name}</Tooltip>}
    ></OverlayTrigger>
  );
}

export default countryTooltip;
