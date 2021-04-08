import React from "react";
import "./collapse.css";
import Table from "react-bootstrap/Table";
import dataJSON from "./../data/country.json";

function CollapseCon({ open, setOpen, clickedInfo, countryCode }) {
  console.log(dataJSON);
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

  // let capital;
  // fetch("http://country.io/capital.json")
  //   .then((response) => response.json())
  //   .then((resData) => {
  //     console.log(resData);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
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

      <Table striped borderless hover variant="dark">
        <tbody>
          <tr>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CollapseCon;
