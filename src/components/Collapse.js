import React from "react";
import "./collapse.css";

function CollapseCon({ open, setOpen, clickedInfo, countryCode }) {
  let style = "sidebar";
  style += open ? " open" : " close";
  let code = countryCode.toLowerCase();
  let srcLink = "https://flagcdn.com/24x18/" + code + ".png";
  let srcSetLink =
    "https://flagcdn.com/48x36/" +
    code +
    ".png 2x, https://flagcdn.com/72x54/" +
    code +
    ".png 3x";
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
      <img src={srcLink} srcset={srcSetLink} width="24" height="18"></img>
    </div>
  );
}

export default CollapseCon;
