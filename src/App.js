import React from "react"
import './App.css';
import Row from "./Row";
import requests  from "./requests";
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* banner Stats here */}
      <Nav/>
      {/* banner Stats here */}
      <Banner />
      {/* row Stats Here */}
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
