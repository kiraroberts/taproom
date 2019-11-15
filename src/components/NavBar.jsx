import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  var navBarButton = {
    margin: "0 50px 0 50px",
    display: "inline-block",
    padding: "14px 16px",
    backgroundColor: "gray",
    border: "solid 2px black",
  };
  var navBar = {
    borderRadius: "20px",
    display: "block",
    margin: "0% auto 0% auto",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "gray",
    width: "70%",
    textAlign: "center",
  };
  var navLink = {
    color: "black",
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-lightgray border-bottom box-shadow mb-3">

      <div className="container" style={navBar}>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/">Home</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/Tap">Taps</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/NewTapForm">Add a tap</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;