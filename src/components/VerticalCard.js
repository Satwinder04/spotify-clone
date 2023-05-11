import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";

function VerticalCard() {
  const { token, getArtistData, artistData } = useContext(StateContext);
  const getRecentPlayed = async () => {
    const response = await axios(`https://api.spotify.com/v1/me/top/tracks`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const { items } = response.data;
    const artistsData = items.map(({ name, artists, album }) => {
      return { name, artists, album };
    });
    getArtistData(artistsData);
  };
  console.log(artistData);
  useEffect(() => {
    getRecentPlayed();
  }, [token]);
  return (
    <div className="d-flex flex-wrap">
      {artistData.map(({ name, album, artists }, index) => {
        return (
          <div className="col-md-3 card2" key={index}>
            <div className="col-md-10 m-3" style={{ position: "relative" }}>
              <img className="card2-img" src={album.images[0].url} />
              <img className="v-play-button" src="../img/play.jpg" />
            </div>
            <div className="col-md-10 text-light px-0 discription">
              <h5 className="fw-bold">{name.slice(0, 16)}</h5>
              <p className="my-2 mb-3">{artists[0].name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VerticalCard;
