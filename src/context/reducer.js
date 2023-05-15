export const reducer = (state, action) => {
  if (action.type === "GET_TOKEN") {
    return { ...state, token: action.payload };
  }
  if (action.type === "GET_PLAYLIST") {
    return { ...state, playlist: action.payload, latestData: action.payload };
  }
  if (action.type === "GET_ARTIST_DATA") {
    return { ...state, artistData: action.payload };
  }
  if (action.type === "GET_SEARCH_CATEGORY") {
    return { ...state, searchCategory: action.payload };
  }
  // if (action.type === "GET_LATEST_DATA") {
  //   return { ...state, latestData: action.payload };
  // }
  return state;
};
