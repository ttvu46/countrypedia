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
  );
}
export default App;
