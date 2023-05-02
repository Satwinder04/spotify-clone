import React from "react";

function VerticalCard(props) {
  return (
    // <div className="col-md-2 card2 ">
    //   <div className="col-md-7 ">
    //     <img className="card-dp" src="../img/like.jpg" />
    //   </div>
    //   <div className="col-md-8 ">
    //     <p className="text-start mx-2 text-light">Like Songs</p>
    //     <img className="p-3 text-end play-button" src="../img/play.jpg" />
    //   </div>
    // </div>
    <>
      <div className="col-md-3 card2">
        <div className="col-md-10 m-3">
          <img className="" src="../img/sohne_lagde.jpeg"/>
        </div>
        <div className="col-md-10 text-light discription">
          <h5 className="fw-bold">Sohne Lagde</h5>
          <p className="my-2 ">Sidhu Moose Wala</p>
        </div>
      </div>
    </>
  );
}

export default VerticalCard;
