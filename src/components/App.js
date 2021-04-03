import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Map from "./Map";
import CollapseCon from "./Collapse";
import ReactTooltip from "react-tooltip";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";
import FlagIcon from "./FlagIcon";

function App() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [clickedInfo, setClickedInfo] = useState("");
  const [contentCode, setContentCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
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
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="Headquarter" title="Headquarter"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    </div>
  );
}
export default App;
