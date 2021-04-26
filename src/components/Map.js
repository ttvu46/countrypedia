import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map({
  setTooltipContent,
  open,
  setOpen,
  clickedInfo,
  setClickedInfo,
  setContentCode,
  setCountryCode,
  setHover,
}) {
  let styleMargin = open ? "375px" : "0px";
  const clickedStyle = {
    default: {
      fill: "#96bb7c",
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
  };
  const countryStyle = {
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
  };
  return (
    <div style={{ marginLeft: styleMargin, transition: "0.5s" }}>
      <ComposableMap
        style={{
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
                style={
                  open && geo.properties.NAME === clickedInfo
                    ? clickedStyle
                    : countryStyle
                }
                key={geo.rsmKey}
                geography={geo}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default Map;
