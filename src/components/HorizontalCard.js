import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";

function HorizontalCard(props) {
  const { latestData } = useContext(StateContext);
  console.log(latestData);
  return (
    <>
      {latestData &&
        latestData.slice(5, 11).map((latestData) => {
          return (
            <div
              className="col-md-3 card1 d-flex align-items-center justify-content-between"
              key={latestData.id}
            >
              <div className="col-md-3 ">
                <img className="card-dp" src={latestData.images[0].url} />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-between">
                <p className="text-start mx-3 text-light">
                  {latestData.name.slice(0, 40)}
                </p>
              </div>
              <div className="col-md-2 mx-1">
                <img className="play-button" src="../img/play.jpg" />
              </div>
            </div>
          );
        })}
    </>
  );
}

export default HorizontalCard;
