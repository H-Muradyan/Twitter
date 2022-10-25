const initialState = [];

export const allUsersDataReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_USERS_DATA") {
    return [...state, action.payload];
  }

  return state;
};
