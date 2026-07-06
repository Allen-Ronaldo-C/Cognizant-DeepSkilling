import React from "react";
import "./App.css";
import office from "./office.jpg";

function App() {

  const heading = "Office Space";

  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office,
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
      Image: office,
    },
    {
      Name: "SmartWorks",
      Rent: 55000,
      Address: "Hyderabad",
      Image: office,
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Mumbai",
      Image: office,
    },
  ];

  return (
    <div className="container">

      <h1>{heading}, at Affordable Range</h1>

      {
        officeSpaces.map((item, index) => (

          <div key={index} className="office-card">

            <img
              src={item.Image}
              alt="Office Space"
              width="250"
              height="250"
            />

            <h2>Name: {item.Name}</h2>

            <h3
              className={
                item.Rent <= 50000 ? "textRed" : "textGreen"
              }
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>Address: {item.Address}</h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;