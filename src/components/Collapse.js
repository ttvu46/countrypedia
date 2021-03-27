import React from "react";
import "./collapse.css";
// import Collapse from "react-bootstrap/Collapse";
// import Button from "react-bootstrap/Button";
function CollapseCon({ open, setOpen, clickedInfo }) {
  let style = "sidebar";
  if (open) {
    style += " open";
  } else {
    style += " close";
  }

  return (
    <div className={style}>
      <a
        href="javascript:void(0)"
        className="closebtn"
        onClick={() => {
          setOpen(false);
        }}
      >
        ×
      </a>
      <h1>{clickedInfo}</h1>
    </div>
  );
}

export default CollapseCon;
