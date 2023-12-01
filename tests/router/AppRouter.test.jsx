import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import AppRouter from './../../src/router/AppRouter';

/* eslint-disable no-undef */
describe("Pruebas en app router", () => {
  test("Debe de msotrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );

   
    expect(screen.getByText('LoginPage')).toBeTruthy()
    expect(screen.getByText('Login')).toBeTruthy()
  });

  test("Debe de msotrar componente de marvel si está autenticado", () => {
    const contextValue = {
      logged: true,
      user:{
        name:'juan',
        id:'123'
      }
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    
  });
});
