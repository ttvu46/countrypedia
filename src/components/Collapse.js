import React from "react";
import "./collapse.css";

function CollapseCon({ open, setOpen, clickedInfo, countryCode }) {
  let style = "sidebar";
  style += open ? " open" : " close";
  let code = countryCode.toLowerCase();
  let srcLink = "https://flagcdn.com/56x42/" + code + ".png";
  let srcSetLink =
    "https://flagcdn.com/112x84/" +
    code +
    ".png 2x, https://flagcdn.com/168x126/" +
    code +
    ".png 3x";

  // fetch("http://www.geognos.com/api/en/countries/service_name/counry_code_or_ip.ouput_format  ")
  //   .then((response) => response.json())
  //   .then((resData) => {
  //     console.log(resData);
  //     //do your logic here
  //     //let person = resData.results
  //     this.setState({ person: resData.results }); //this is an asynchronous function
  //   });
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
      <img src={srcLink} srcset={srcSetLink} width="56" height="42"></img>
    </div>
  );
}

export default CollapseCon;
