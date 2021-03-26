import React, { useState } from "react";
import Map from "./countryMap";
import NavBar from "./NavBar";
import ReactTooltip from "react-tooltip";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <NavBar />
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
export default App;
