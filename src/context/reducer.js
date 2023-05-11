export const reducer = (state, action) => {
  if (action.type === "GET_TOKEN") {
    return { ...state, token: action.payload };
  }
  if (action.type === "GET_PLAYLIST") {
    return { ...state, playlist: action.payload };
  }
  if (action.type === "GET_ARTIST_DATA") {
    return { ...state, artistData: action.payload };
  }
  return state;
};
