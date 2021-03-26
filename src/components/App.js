import React, { useState } from "react";
import Map from "./countryMap";
import ReactTooltip from "react-tooltip";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
    // <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
    //   <Tab eventKey="home" title="Home">
    //     <Map setTooltipContent={setContent} />
    //     <ReactTooltip>{content}</ReactTooltip>
    //   </Tab>
    //   <Tab eventKey="profile" title="Profile">
    //     <Map setTooltipContent={setContent} />
    //     <ReactTooltip>{content}</ReactTooltip>
    //   </Tab>
    //   <Tab eventKey="contact" title="Contact" disabled>
    //     <Map setTooltipContent={setContent} />
    //     <ReactTooltip>{content}</ReactTooltip>
    //   </Tab>
    // </Tabs>
  );
}
export default App;
