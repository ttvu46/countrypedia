import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./InfoContainer.css";

function InfoContainer({
  clickedCovid,
  setClickedCovid,
  casesType,
  setCasesType,
  title,
  total,
  cases,
}) {
  let styles = "infoBox__cases";
  let box_styles = "infoBox";
  let bor = "dark";

  if (title === "Cases") {
    styles = "infoBox__cases";
    if (casesType == "Cases") {
      box_styles += " infoBox--selected";
      bor = "danger";
    }
  } else if (title == "Recovered") {
    styles = "infoBox__recovered";
    if (casesType == "Recovered") {
      box_styles += " infoBox--selected";
      bor = "sucess";
    }
  } else {
    styles = "infoBox__death";
    if (casesType == "Death") {
      box_styles += " infoBox--selected";
      bor = "secondary";
    }
  }
  console.log(casesType);
  return (
    <div>
      <br />
      <Card
        border={bor}
        className={box_styles}
        onClick={(e) => {
          setCasesType(title);
        }}
      >
        {/* <Card.Header style={{ visibility: "hidden" }}></Card.Header> */}
        <Card.Body>
          <p class="h3">{title}</p>
          <p className={styles}>+ {cases}</p>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          <Card.Text>{total} Total</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default InfoContainer;
