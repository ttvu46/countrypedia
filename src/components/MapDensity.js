import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import dataJSON from "./../data/population.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleQuantile()
  .domain([0, 1439323776])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
    "#6C0021",
  ]);
console.log(colorScale(4000));
const MapDensity = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Graticule stroke="#eeebdd" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const population = dataJSON[geo.properties.ISO_A2]
              ? dataJSON[geo.properties.ISO_A2]["Population2019"]
              : 0;
            console.log(population);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={population != 0 ? colorScale(population) : "#F5F4F6"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapDensity;
