import { AuthTypes } from "../Index/actions";

const initialState = {
  user: {},
};

export const Auth_R = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.Entry:
      return { ...state };

    default:
      return state;
  }
};
