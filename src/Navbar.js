
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
const Navbar = () => {
  
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

  
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faSearch} />
          <span>KID</span>
          <FontAwesomeIcon icon={faBell} />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ paddingLeft: "0.5rem", paddingBottom: "1rem" }}
            />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
