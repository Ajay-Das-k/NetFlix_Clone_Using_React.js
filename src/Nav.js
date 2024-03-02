import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";


function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [break, handleBreak] = useState(false);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="left_content">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
        <ul className="navigator">
          <li className="active">HOME</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News&Popular</li>
          <li>MyList</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      <div className="right_content">
        <ul className="navigator">
          <li>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li>Children</li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>

          <li>
            <img
              className="nav_avatar"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              alt="Netflix Avatar"
            />
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ paddingLeft: "0.5rem" ,paddingBottom:"1rem"}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
