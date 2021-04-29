import React from "react";
import { scaleQuantile } from "d3-scale";
import ColorScaling from "./ColorScaling";
import "./ColorInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function getRange(range) {
  const colorScale = scaleQuantile()
    .domain([1000, 250000000])
    .range([
      "#ffd5cc",
      "#ff9580",
      "#ff6a4d",
      "#ff2b00",
      "#cc2200",
      "#991a00",
      "#661100",
    ]);
  return colorScale.invertExtent(range);
}

// function ColorInfo() {
//   return (
//     <div style={{ marginTop: "20px" }}>
//       <Container>
//         <Row>
//           <Col>
//             <ColorScaling color="#ffd5cc" range={getRange("#ffd5cc")} />
//             <ColorScaling color="#ff9580" range={getRange("#ff9580")} />
//             <ColorScaling color="#ff6a4d" range={getRange("#ff6a4d")} />
//             <ColorScaling color="#ff2b00" range={getRange("#ff2b00")} />
//           </Col>

//           <Col>
//             <ColorScaling color="#cc2200" range={getRange("#cc2200")} />
//             <ColorScaling color="#991a00" range={getRange("#991a00")} />
//             <ColorScaling color="#661100" range={getRange("#661100")} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

function ColorInfo() {
  return (
    <div style={{ padding: "200px 30px 0px" }}>
      <ColorScaling color="#ffd5cc" range={getRange("#ffd5cc")} />
      <ColorScaling color="#ff9580" range={getRange("#ff9580")} />
      <ColorScaling color="#ff6a4d" range={getRange("#ff6a4d")} />
      <ColorScaling color="#ff2b00" range={getRange("#ff2b00")} />
      <ColorScaling color="#cc2200" range={getRange("#cc2200")} />
      <ColorScaling color="#991a00" range={getRange("#991a00")} />
      <ColorScaling color="#661100" range={getRange("#661100")} />
      <p>
        <FontAwesomeIcon icon={faCircle} color="#330900" /> > 1,000,000,000
      </p>
    </div>
  );
}
export default ColorInfo;
