import { Route, Routes } from "react-router-dom";
import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />

        {/*Cualquier ruta que no sea login pasara por HeroesROUTES*/}
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
