import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
const baseUrl="https://image.tmdb.org/t/p/original"




function Row({ title, fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 0, // Disables player controls
    modestbranding: 1, // Removes YouTube logo
    rel: 0, // Removes related videos
    showinfo: 0, // Removes video title and share button
    disablekb: 1, // Disables keyboard controls
    fs: 0, // Disables full screen button
  },
};
const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    const movieName = movie?.name || movie?.title || ""; // Extract movie name or title
    movieTrailer(movieName)
      .then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setShowModal(true); 
        } else {
          console.log("No trailer found for this movie");
        }
      })
      .catch((error) => console.log(error));
  }
};
const closeModal = () => {
  setTrailerUrl(""); // Reset trailer URL
  setShowModal(false); // Hide modal
};
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        </div>
      )}
    </div>
  );
}
// sdsd
export default Row