/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { AuthContext } from "./../../src/auth/context/AuthContext";
import PrivateRoute from "./../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en las rutas privadas", () => {
  test("Debe de mostrar el children si está autenticado ", () => {
    // se usa de esta forma porque debemos sobreescribir la implementacion del prototype
    Storage.prototype.setItem = jest.fn() 

    const contextValue = {
      logged: true,
      user: {
        name: "Juan",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith( "lastPath", "/search?q=batman" );
  });
});
