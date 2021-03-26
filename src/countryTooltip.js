import React from "react";

function countryTooltip() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
    ></OverlayTrigger>
  );
}
