import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  var navBarButton = {
    margin: "0 50px 0 50px",
    display: "inline-block",
    backgroundColor: "gray",
    border: "solid 2px black",
  };
  var navBar = {
    display: "block",
    margin: "0% auto 0% auto",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "lightgray",

    textAlign: "center",
  };
  var navLink = {
    color: "black",
  };
  return (
    <nav>
      <div style={navBar}>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/">Home</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/TapList">Taps</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/NewTapForm">Add a tap</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;