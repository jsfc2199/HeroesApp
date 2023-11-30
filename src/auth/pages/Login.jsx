import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const {login} = useContext(AuthContext) //del contexto que da el provider obtenemos el estado del login
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Juan Franco') //hacemos el dispatch del login

    navigate(lastPath,{
      replace:true
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />
      <button className="bnt btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
