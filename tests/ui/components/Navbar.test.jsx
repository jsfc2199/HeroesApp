import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";

/* eslint-disable no-undef */
/*
Para la prueba de hacer logout es necesario mocker el use navigate, pero este viene de react-router-dom, el cual contiene muchas mas cosas aparte de este hook
Entonces debemos hacer que se mockee solo lo que necesitamos
*/
const mockedUseNavigate= jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), //con esto mantenemos todas las propiedades de la libreria
    useNavigate: () => mockedUseNavigate, //mockeamos solo lo que nos interesa de la libreria
}))

describe("Pruebas en el componente del navbar", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Juan",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrar el nombre del usuario logeado", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Juan')).toBeTruthy()
  });

  test("Debe de llamar el logout y vabigate cuando se hace click en el botón logout", () => {
    render(
        <MemoryRouter>
          <AuthContext.Provider value={contextValue}>
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      );

      const logoutBtn = screen.getByRole('button')      
      fireEvent.click(logoutBtn)

      expect(contextValue.logout).toHaveBeenCalled()
      expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true} )

  });
});
