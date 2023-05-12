import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";

function VerticalCard() {
  const { token, getArtistData, artistData } = useContext(StateContext);
  const getRecentPlayed = async () => {
    const response = await axios(
      `
      https://api.spotify.com/v1/me/player/recently-played`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const { items } = response.data;
    // console.log(items);
    const artistsData = items.map((artistData) => {
      return artistData;
    });
    getArtistData(artistsData);
  };
  // console.log(artistData);
  useEffect(() => {
    getRecentPlayed();
  }, [token]);

  const handleClick = (artistData) => {
    // console.log(artistData);
  };
  return (
    <div className="d-flex flex-wrap">
      {artistData &&
        artistData.slice(10, 15).map((artistData, index) => {
          return (
            <div className="col-md-3 card2" key={index}>
              <div className="col-md-10 m-3" style={{ position: "relative" }}>
                <img
                  className="card2-img"
                  src={artistData.track.album.images[0].url}
                />
                <img
                  className="v-play-button"
                  src="../img/play.jpg"
                  onClick={() => handleClick(artistData)}
                />
              </div>
              <div className="col-md-10 text-light px-0 discription">
                <h5 className="fw-bold">
                  {artistData.track.name.slice(0, 20)}
                </h5>
                <p className="my-2 mb-3">{artistData.track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default VerticalCard;
