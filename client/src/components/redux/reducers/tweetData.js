const initialState = [];

export const tweetdataReducer = (state = initialState, action) => {
  if (action.type === "POST_TWEET") {
    return [...state, action.payload];
  }

  return state;
};
