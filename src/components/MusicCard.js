import React from "react";
import HorizontalCard from "./HorizontalCard";
import CardHeading from "./CardHeading";

function MusicCard(props) {
  return (
    <div className="card-box d-flex justify-content-center">
      <div className="px-5 sub-card-box">
        <div className="text-start my-5 col-md-12 d-flex justify-content-start flex-wrap">
          <CardHeading />
          <HorizontalCard />
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
