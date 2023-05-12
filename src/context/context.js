import { createContext, useReducer } from "react";
import { reducer } from "../context/reducer";
import { type } from "@testing-library/user-event/dist/type";
import { reducerCases } from "./constants";
export const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const initialState = {
    token: null,
    playlist: [],
    artistData: [],
    latestData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getToken = (token) => {
    dispatch({ type: "GET_TOKEN", payload: token });
  };

  const getMyPlaylists = (myPlaylist) => {
    dispatch({ type: "GET_PLAYLIST", payload: myPlaylist });
  };

  const getArtistData = (artistsData) => {
    dispatch({ type: "GET_ARTIST_DATA", payload: artistsData });
  };

  // const getLatestData = () => {
  //   dispatch({ type: "GET_LATEST_DATA", payload: myPlaylist });
  // };

  return (
    <StateContext.Provider
      value={{
        ...state,
        getToken,
        getMyPlaylists,
        getArtistData,
        // getLatestData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
