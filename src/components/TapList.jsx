import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

// var masterTapList = [
//   {
//     name: "Pilsner",
//     brand: "pFriem",
//     price: "$5",
//     alcoholContent: "4.9%",
//   },
//   {
//     name: "IPA",
//     brand: "Lagunitas",
//     price: "$5",
//     alcoholContent: "6.2%"
//   },
//   {
//     name: "Guinness Draught",
//     brand: "Guinness",
//     price: "$4",
//     alcoholContent: "4.2%"
//   },
//   {
//     name: "Black Butte Porter",
//     brand: "Deschutes Brewery",
//     price: "$4.50",
//     alcoholContent: "5.2%"
//   },
//   {
//     name: "Supplication",
//     brand: "Russian River Brewing Company",
//     price: "$7.50",
//     alcoholContent: "7.75%"
//   },
// ];

function TapList(props) {
  return (
    <div>
      {props.tapList.map((tap) =>
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          key={tap.Id}
          tapId={tap.Id} 
        />
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object
};


export default TapList;