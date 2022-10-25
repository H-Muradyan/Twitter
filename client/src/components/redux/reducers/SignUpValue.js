const initialState = {

};

export const SignUpValueReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_SIGN_UP_VALUE") {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
};
