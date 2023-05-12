import axios from "axios";
import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/context";

function PlayList(props) {
  const { token, getMyPlaylists, playlist } = useContext(StateContext);
  const getArtist = async () => {
    const response = await axios(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const { items } = response.data;
    const myPlaylist = items.map((data) => {
      return data;
    });
    getMyPlaylists(myPlaylist);
    // getLatestData(myPlaylist);
  };
  // console.log(playlist);
  useEffect(() => {
    getArtist();
  }, [token]);
  return (
    <div className="l-bottom-box">
      {playlist &&
        playlist.map(({ name, id }) => {
          return (
            <p className=" my-1 " key={id}>
              {name}
            </p>
          );
        })}
    </div>
  );
}

export default PlayList;
