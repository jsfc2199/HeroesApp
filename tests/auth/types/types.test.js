/* eslint-disable no-undef */

import { types } from './../../../src/auth/types/types';
describe('Pruebas en los type de las acciones', () => {

  test('Debe de regresar los types correcto ', () => {
    expect(types).toEqual( { login: '[Auth] Login', logout: '[Auth] Logout' })
  })
  
})
