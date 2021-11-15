import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    mulitiplier: 2,
  },

  recovered: {
    hex: "#7DD71D",
    mulitiplier: 3,
  },

  deaths: {
    hex: "white",
    mulitiplier: 4,
  },
};

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
//   export const showDataOnMap = (data, casesType) =>
//   data.map((country) => (
//     <Circle
//       center={[country.countryInfo.lat, country.countryInfo.long]}
//       fillOpacity={0.4}
//       pathOptions={{
//         color: casesTypeColors[casesType].hex,
//         fillColor: casesTypeColors[casesType].hex,
//       }}
//       radius={
//         Math.sqrt(country[casesType] / 10) *
//         casesTypeColors[casesType].mulitiplier
//       }
//     >
const CovidMap = ({ casesType, countries }) => {
  console.log(countries);
  let type = "";
  let color = "";
  if (casesType == "Cases") {
    type = "cases";
    color = "red";
  } else if (casesType == "Recovered") {
    type = "recovered";
    color = "#33cc33";
  } else {
    type = "deaths";
    color = "black";
  }
  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Graticule stroke="#e8e8e8" />
      <Geographies geography={geoUrl} fill="#d9d9d9">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {countries.map((country) => (
        <Marker
          coordinates={[country.countryInfo.long, country.countryInfo.lat]}
        >
          <circle
            r={Math.sqrt(country[type] / 10000)}
            // r={Math.sqrt(country[type] / 100)}
            opacity={0.4}
            fill={color}
          />
        </Marker>
      ))}

      {/* {contries.map((country) => (
        <Marker coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
          </text>
        </Marker>
      ))} */}
    </ComposableMap>
  );
};

export default CovidMap;
