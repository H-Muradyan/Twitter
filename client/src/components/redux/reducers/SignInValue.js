const initialState = {
};

export const SignInValueReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_SIGN_IN_VALUE") {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
