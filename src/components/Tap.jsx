import React from "react";
import PropTypes from "prop-types";


function Tap(props) {
  var tapStyle = {
    width: "300px",
    height: "400px",
    textAlign: "center",
    // padding: "15",
    backgroundColor: "blanchedalmond",
    margin: "5px",
  };
  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (

    <div style={contentStyle} className="">
      <div className="">
        <div style={tapStyle} className="col s3 card">
          <h2 >{props.name}</h2>
          <h3>{props.brand}</h3>
          <h3>{props.alcoholContent}</h3>
          <h2>{props.price}</h2>
        </div>
      </div>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string
};

export default Tap;