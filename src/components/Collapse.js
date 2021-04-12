import React from "react";
import "./collapse.css";
import Table from "react-bootstrap/Table";
import dataJSON from "./../data/country.json";

function CollapseCon({ open, setOpen, clickedInfo, countryCode }) {
  console.log(dataJSON["VN"]["Independent"]);
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
        {open && (
          <tbody>
            <tr>
              <td>Independent</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
            </tr>
            <tr>
              <td>Official Name</td>
              <td>{dataJSON[countryCode]["OfficialName"]}</td>
            </tr>
            <tr>
              <td>Capital city</td>
              <td>{dataJSON[countryCode]["Capital"]}</td>
            </tr>
            <tr>
              <td>Continent</td>
              <td>{dataJSON[countryCode]["Continent"]}</td>
            </tr>
            <tr>
              <td>Population(2019)</td>
              <td>{dataJSON[countryCode]["Population2019"]}</td>
            </tr>
            <tr>
              <td>GDP(2018)</td>
              <td>{"$" + dataJSON[countryCode]["GDP2018"]}</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>{dataJSON[countryCode]["Currency"]}</td>
            </tr>
            <tr>
              <td>Calling code</td>
              <td>{dataJSON[countryCode]["CallingCode"]}</td>
            </tr>

            {/* <td>Capical city</td>
          <td>Continent</td>
          <td>Population(2019)</td>
          <td>Area</td>
          <td>GDP(2018)</td>
          <td>Currency</td>
          <td>Calling code</td> */}

            {/* {open && (
            <tr>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["OfficialName"]}</td>
              <td>{dataJSON[countryCode]["Capital"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
              <td>{dataJSON[countryCode]["Independent"]}</td>
            </tr> */}
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default CollapseCon;
