import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";
import axios from "./axios"
import requests from './requests'

const baseUrl = "https://image.tmdb.org/t/p/original";



function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[randomIndex]);
      
      return request;
    }
    fetchData();
  }, []);
  function truncate(str,n){
   return str?.length>n?str.substr(0,n-1)+"...":str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Other banner content */}

      <div className="banner_Content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_discription">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_buttons">
          <button className="banner_button play_button">
            <FontAwesomeIcon icon={faPlay} className="icon" />
            <span className="text">Play</span>
          </button>
          <button className="banner_button info_button">
            <FontAwesomeIcon icon={faCircleExclamation} className="icon" /> More
            Info
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner