import React from "react";

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
      {masterTapList.map((Tap, index) =>
        <Tap name={Tap.name}
          brand={Tap.brand}
          price={Tap.price}
          alcoholContent={Tap.alcoholContent}
          key={index} />
      )}
    </div>
  );
}


export default TapList;