import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Map from "./Map";
import CollapseCon from "./Collapse";
import ReactTooltip from "react-tooltip";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [clickedInfo, setClickedInfo] = useState("");
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
          />
          <Map
            setTooltipContent={setContent}
            setOpen={setOpen}
            setClickedInfo={setClickedInfo}
          />
          <ReactTooltip>{content}</ReactTooltip>
        </Tab>
        <Tab eventKey="profile" title="Profile"></Tab>
        <Tab eventKey="Headquarter" title="Headquarter"></Tab>
        <Tab eventKey="contact" title="Contact" disabled></Tab>
      </Tabs>
    </div>
  );
}
export default App;
