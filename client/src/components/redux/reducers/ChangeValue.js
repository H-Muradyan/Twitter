const initialState = {
  firstName: "",
};

export const ChangeValueReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_CHANGE_VALUE") {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
