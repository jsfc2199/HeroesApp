import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, //siempre se recomienda desestrcturar el state y luego cambiar solo lo que nos interese
        logged: true,
        name: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
