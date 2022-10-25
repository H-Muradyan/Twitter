const initialState = {};

export const TweetValueReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_TWEET_VALUE") {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
