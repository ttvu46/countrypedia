import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Map from "./Map";
import CollapseCon from "./Collapse";
import ReactTooltip from "react-tooltip";
import MapDensity from "./MapDensity";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./App.css";
import FlagIcon from "./FlagIcon";
import ColorInfo from "./ColorInfo";
import dataJSON from "./../data/country.json";
import fNum from "./NumberFormat";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidMap from "./CovidMap";
import InfoContainer from "./InfoContainer";
function App() {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [clickedInfo, setClickedInfo] = useState("");
  const [contentCode, setContentCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [casesType, setCasesType] = useState("Cases");
  const [countryInfo, setCountryInfo] = useState({});
  const [clickedCovid, setClickedCovid] = useState(false);
  const [mapCountries, setMapCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setMapCountries(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  console.log(mapCountries);
  return (
    <div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="tabStyle"
      >
        <Tab eventKey="home" title="Home">
          <CollapseCon
            open={open}
            setOpen={setOpen}
            clickedInfo={clickedInfo}
            countryCode={countryCode}
          />
          <Map
            setTooltipContent={setContent}
            open={open}
            setOpen={setOpen}
            clickedInfo={clickedInfo}
            setClickedInfo={setClickedInfo}
            setCountryCode={setCountryCode}
            setContentCode={setContentCode}
            setHover={setHover}
          />
          {hover && (
            <ReactTooltip>
              {content}: <FlagIcon countryCode={contentCode} />
            </ReactTooltip>
          )}
        </Tab>
        <Tab eventKey="pro" title="Population denstity">
          <Container style={{ margin: "0px", padding: "0px" }} fluid>
            <Row>
              <Col lg={3} style={{ margin: "0px", padding: "0px" }}>
                <ColorInfo />
              </Col>
              <Col lg={9} style={{ margin: "0px", padding: "0px" }}>
                <MapDensity
                  setContent={setContent}
                  setHover={setHover}
                  setContentCode={setContentCode}
                />
                {hover && (
                  <ReactTooltip>
                    {content} - {fNum(dataJSON[contentCode]["Population2019"])}
                  </ReactTooltip>
                )}
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Covid" title="Covid">
          <Container style={{ margin: "20px", padding: "0px" }} fluid>
            <Row style={{ margin: "20px", padding: "0px" }}>
              <InfoContainer
                clickedCovid={clickedCovid}
                setClickedCovid={setClickedCovid}
                casesType={casesType}
                setCasesType={setCasesType}
                title="Cases"
                total={fNum(countryInfo.cases)}
                cases={fNum(countryInfo.todayCases)}
              />
              <InfoContainer
                clickedCovid={clickedCovid}
                setClickedCovid={setClickedCovid}
                casesType={casesType}
                setCasesType={setCasesType}
                title="Recovered"
                total={fNum(countryInfo.recovered)}
                cases={fNum(countryInfo.todayRecovered)}
              />
              <InfoContainer
                clickedCovid={clickedCovid}
                setClickedCovid={setClickedCovid}
                casesType={casesType}
                setCasesType={setCasesType}
                title="Death"
                total={fNum(countryInfo.deaths)}
                cases={fNum(countryInfo.todayDeaths)}
              />
            </Row>
            <Row>
              <Col sm={8}>
                <CovidMap casesType={casesType} countries={mapCountries} />
              </Col>
              <Col sm={4}>sm=4</Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="contact" title="Contact"></Tab>
      </Tabs>
    </div>
  );
}
export default App;
