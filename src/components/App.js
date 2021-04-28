import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Map from "./Map";
import CollapseCon from "./Collapse";
import ReactTooltip from "react-tooltip";
import MapDensity from "./MapDensity";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";
import FlagIcon from "./FlagIcon";
import ColorInfo from "./ColorInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [clickedInfo, setClickedInfo] = useState("");
  const [contentCode, setContentCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryData, setCountryData] = useState("");
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="tabStyle"
      >
        <Tab eventKey="home" title="Home">
          <CollapseCon
            open={open}
            setOpen={setOpen}
            clickedInfo={clickedInfo}
            countryCode={countryCode}
            countryData={countryData}
          />
          <Map
            setTooltipContent={setContent}
            open={open}
            setOpen={setOpen}
            clickedInfo={clickedInfo}
            setClickedInfo={setClickedInfo}
            setCountryCode={setCountryCode}
            setContentCode={setContentCode}
            setHover={setHover}
          />
          {hover && (
            <ReactTooltip>
              {content}: <FlagIcon countryCode={contentCode} />
            </ReactTooltip>
          )}
        </Tab>
        <Tab eventKey="pro" title="Population denstity">
          <Container style={{ margin: "0px", padding: "0px" }} fluid>
            <Row>
              <Col lg={3} style={{ margin: "0px", padding: "0px" }}>
                <ColorInfo />
              </Col>
              <Col lg={9} style={{ margin: "0px", padding: "0px" }}>
                <MapDensity setContent={setContent} setHover={setHover} />
                {hover && <ReactTooltip>{content}</ReactTooltip>}
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Headquarter" title="Headquarter"></Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </div>
  );
}
export default App;
