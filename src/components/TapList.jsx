import React from "react";
import Tap from "./Tap";

var masterTapList = [
  {
    name: "name",
    brand: "brand",
    price: "price",
    alcoholContent: " ",
  },
  {
    name: "name",
    brand: "brand",
    price: "",
    alcoholContent: ""
  },
  {
    name: "name",
    brand: "brand",
    price: "",
    alcoholContent: ""
  },
  {
    name: "name",
    brand: "brand",
    price: "",
    alcoholContent: ""
  },
  {
    name: "name",
    brand: "brand",
    price: "",
    alcoholContent: ""
  },
];

function TapList() {
  return (
    <div>
      {masterTapList.map((tap, index) =>
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          alcoholContent={tap.alcoholContent}
          key={index} />
      )}
    </div>
  );
}


export default TapList;