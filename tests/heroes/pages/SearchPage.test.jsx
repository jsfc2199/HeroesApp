/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from './../../../src/heroes/pages/SearchPage';

describe('Pruebas en el search page', () => {
  test('debe de mostrarse correctamente con valores por defectos', () => {
    const {container} = render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('debe de mostrarse a bataman y el input con el valor del query string', () => {
    render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage/>
        </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    
    const img = screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

    const alert = screen.getByLabelText('alert-danger')
    expect(alert.style.display).toBe('none')
  })
  
})
