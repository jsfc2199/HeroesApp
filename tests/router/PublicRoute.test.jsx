/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { AuthContext } from "./../../src/auth/context/AuthContext";
import PublicRoute from "./../../src/router/PublicRoute";
import { MemoryRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

describe("Pruebas en public route", () => {
  test("Debe de mostrar el children si no está autenticado ", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          {/* cualquier ruta sería publica en este caso */}
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("Debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "juan",
        id: "123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        {/* memory route simula el browser router y nos encontramos inicialmente en el login */}
        <MemoryRouter initialEntries={["/login"]}>
 
        {/*configuramos al menos dos rutas, una sería el login y la otra la de marvel, esto para no tener un ciclo infinito en solo login */}
          <Routes>
            
            {/* ruta publica */}
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />

            {/* ruta cuando este autenticado */}
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />

          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // como estamos autenticados debe ir a la pagina de marvel
    expect(screen.getByText('Pagina Marvel')).toBeTruthy()
  });
});
