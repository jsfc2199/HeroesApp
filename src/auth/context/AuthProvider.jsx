import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "./../types/types";

// const initialState = {
//     logged: false
// }

//inicializador del estado del reducer
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init); //podemos obviar el initialState ya que se lee desde el localStorage

  //funcion que al llamarla ejecuta el dispatch
  const login = (name = "") => {
    const user = {
      id: "ABC",
      name: name,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user)); //guardamos el usuario en el local storage

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user') //limpiamos el local storage
     
    const action = {
      type: types.logout,     
    };   

    dispatch(action);
  };
  return (
    //exponemos el estado del mismo
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
