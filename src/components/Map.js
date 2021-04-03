import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map({
  setTooltipContent,
  setOpen,
  setClickedInfo,
  setContentCode,
  setCountryCode,
  setHover,
}) {
  return (
    <ComposableMap
      style={{
        margin: "0px",
        backgroundColor: "#1b1717",
      }}
      data-tip=""
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              onMouseOver={() => {
                setTooltipContent(geo.properties.NAME);
                setContentCode(geo.properties.ISO_A2);
                setHover(true);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
                setContentCode("");
                setHover(false);
              }}
              onClick={() => {
                setOpen(true);
                setClickedInfo(geo.properties.NAME);
                setCountryCode(geo.properties.ISO_A2);
              }}
              style={{
                default: {
                  fill: "#f0c929",
                  outline: "none",
                  stroke: "#FFFFFF",
                  strokeWidth: "0.9",
                },
                hover: {
                  fill: "grey",
                  stroke: "black",
                  outline: "#184d47",
                },
                pressed: {
                  fill: "#96bb7c",
                  outline: "none",
                },
              }}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

export default Map;
