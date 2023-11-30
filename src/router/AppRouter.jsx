import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>


        {/*Cualquier ruta que no sea login pasara por HeroesROUTES*/}

        {/* Protegemos las rutas que deben ser privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        ></Route>

        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;
