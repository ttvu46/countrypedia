import React from "react";

function flagIcon({ countryCode }) {
  let code = countryCode.toLowerCase();
  console.log(code);
  let srcLink = "https://flagcdn.com/16x12/" + code + ".png";
  let srcSetLink =
    "https://flagcdn.com/32x24/" +
    code +
    ".png 2x, https://flagcdn.com/48x36/" +
    code +
    ".png 3x";
  return (
    <img
      src={srcLink}
      srcset={srcSetLink}
      width="16"
      height="12"
      alt="flagIcon"
    ></img>
  );
}

export default flagIcon;
