import React from "react";
import PropTypes from "prop-types";


function Tap(props) {
  var tapStyle = {
    width: "300px",
    height: "400px",
    textAlign: "center",
    // padding: "15",
    backgroundColor: "lightgray",
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
          <h4 >{props.name}</h4>
          <h4>{props.brand}</h4>
          <h4>{props.alcoholContent}</h4>
          <h4>{props.price}</h4>
        </div>
      </div>
    </div>
  );
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  ticketId: PropTypes.string.isRequired,
  key: PropTypes.string
};

export default Tap;