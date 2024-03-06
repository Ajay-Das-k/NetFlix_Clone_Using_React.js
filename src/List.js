import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import axios from "./axios"; // Import axios if it's not already imported
const baseUrl = "https://image.tmdb.org/t/p/original";

export default function List({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    const container = listRef.current;
    const scrollDistance = container.getBoundingClientRect().width / 2 - 50;
    if (direction === "left") {
      container.scrollLeft -= scrollDistance;
      setSlideNumber(slideNumber - 1);
    } else {
      container.scrollLeft += scrollDistance;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`sliderArrow left ${slideNumber === 0 && "disabled"}`}
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"} `}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
