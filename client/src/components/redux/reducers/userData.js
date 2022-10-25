const initialState = {};

export const userDataReducer = (state = initialState, action) => {
  if (action.type === "GET_DATA") {
    return {
      ...state,
      ...action.payload,
    };
  }
  if (action.type === "CHANGE_DATA") {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
