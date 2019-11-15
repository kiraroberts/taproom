import React from "react";
import PropTypes from "prop-types";


function Tap(props) {
  return (

    <div className="">
      <div className="">
        <div className="col s3 card">
          <h2 >{props.name}</h2>
          <h3>{props.brand}</h3>
          <h3>{props.alcoholContent}</h3>
          <h2>{props.price}</h2>
          <h5>"{props.quote}"</h5>
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